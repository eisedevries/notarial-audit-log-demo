"""Pipeline: holds in-memory state, ingests events, runs gates, records audit and changes.

State is the single source of truth; everything else operates on it.
"""

from __future__ import annotations

from typing import Any

from domain import (
    AuditCoreEntry,
    ChangeLogEntry,
    GateVerdict,
    InstitutionalEntry,
    LogicEntry,
    RegistrationEntry,
    Trace,
)
from governance.registry import Governance

from .gates import gate1_evaluate, gate2_evaluate


def _ts(step: int, n: int) -> str:
    """Synthetic timestamp; matches the prototype's HH:MM:SS format."""
    base = 14 * 3600 + step * 180 + n * 7
    h = (base // 3600) % 24
    m = (base // 60) % 60
    s = base % 60
    return f"{h:02d}:{m:02d}:{s:02d}"


class Pipeline:
    """Per-session state holder + event/gate processor."""

    def __init__(self, governance: Governance) -> None:
        self.governance = governance
        self.reset()

    # ---------------- state ----------------

    def reset(self) -> None:
        self.reg: list[RegistrationEntry] = []
        self.logic: list[LogicEntry] = []
        self.inst: list[InstitutionalEntry] = []
        self.verdicts: list[GateVerdict] = []  # most recent first
        self.traces: list[Trace] = []
        self.audit_core: list[AuditCoreEntry] = []
        self.changes: list[ChangeLogEntry] = []
        self._ev_count = 0

    def _next_reg_id(self) -> str:
        self._ev_count += 1
        return f"r-{self._ev_count:03d}"

    def _reg_lookup(self) -> dict[str, RegistrationEntry]:
        return {r.id: r for r in self.reg}

    # ---------------- ingestion ----------------

    def ingest_event(self, payload: dict[str, Any], step: int) -> RegistrationEntry:
        """Accept one emitted event into Layer 1."""
        rid = self._next_reg_id()
        entry = RegistrationEntry(
            id=rid,
            source=payload["source"],
            type=payload["type"],
            sev=payload.get("sev", 6),
            correlation=payload.get("correlation"),
            actor=payload.get("actor"),
            attrs=payload.get("attrs", {}) or {},
            step=step,
            t=_ts(step, self._ev_count),
            **({"_tamper": payload["_tamper"]} if payload.get("_tamper") else {}),
        )
        self.reg.append(entry)

        # Crosslinks: if the event records external identifiers, capture as a Trace.
        xls = entry.attrs.get("crosslinks") if entry.attrs else None
        if xls:
            externals = [x for x in [
                entry.attrs.get("cdr_log_uuid"),
                entry.attrs.get("cdr_nummer"),
                entry.attrs.get("vis_id"),
                entry.attrs.get("brp_ref"),
                entry.attrs.get("kad_ref"),
                entry.attrs.get("ech_id"),
            ] if x]
            self.traces.append(
                Trace(
                    id=entry.id,
                    local=xls[0] if xls else entry.id,
                    external=externals,
                )
            )

        return entry

    # ---------------- gates ----------------

    def run_gate1(
        self,
        *,
        action: str,
        activator: str,
        spec_id: str,
        member_types: list[str],
        step: int,
        correlation: str | None = None,
    ) -> GateVerdict:
        """Evaluate the Reg|Log Gate over Registration entries matching member_types.

        When `correlation` is given, the group is scoped to that process instance
        (one correlation root), so repeated passes that reuse the same event types
        - e.g. two consultations - stay separate instead of merging.
        """
        group = [
            r for r in self.reg
            if r.type in member_types and (correlation is None or r.correlation == correlation)
        ]
        verdict = gate1_evaluate(group, action=action, step=step, governance=self.governance)
        self.verdicts.insert(0, verdict)
        if verdict.passed:
            # Compute Fig 5.5 attributes from the member registration events.
            objects = [r.attrs.get("object") for r in group if r.attrs and r.attrs.get("object")]
            target = max(set(objects), key=objects.count) if objects else None
            times = [r.t for r in group if r.t]
            span_start = min(times) if times else None
            span_end = max(times) if times else None
            corrs = [r.correlation for r in group if r.correlation]
            trace_id = f"trace-{corrs[0].split('/')[0]}" if corrs else None
            self.logic.append(
                LogicEntry(
                    id=f"l-{len(self.logic) + 1}",
                    action=action,
                    activator=activator,
                    spec=spec_id,
                    members=[e.id for e in group],
                    step=step,
                    target=target,
                    status="completed",
                    trace_id=trace_id,
                    span_start=span_start,
                    span_end=span_end,
                )
            )
        return verdict

    def run_gate2(
        self,
        *,
        fact: str,
        logic_actions: list[str],
        spec_id: str,
        step: int,
        correlation: str | None = None,
    ) -> GateVerdict:
        """Evaluate the Log|Inst Gate over Logic entries matching logic_actions.

        When `correlation` is given, the group is scoped to that process instance
        (matched on the Logic entries' trace_id), so repeated passes that reuse the
        same action name stay separate instead of merging.
        """
        trace = f"trace-{correlation.split('/')[0]}" if correlation else None
        group = [
            lg for lg in self.logic
            if lg.action in logic_actions and (trace is None or lg.trace_id == trace)
        ]
        verdict = gate2_evaluate(
            group,
            fact=fact,
            spec_id=spec_id,
            step=step,
            governance=self.governance,
            registration_lookup=self._reg_lookup(),
        )
        self.verdicts.insert(0, verdict)
        if verdict.passed:
            inst_entry = InstitutionalEntry(
                id=f"i-{len(self.inst) + 1}",
                fact=fact,
                logics=[lg.id for lg in group],
                spec=spec_id,
                step=step,
            )
            self.inst.append(inst_entry)
            # The audit log core IS the Institutional layer: one core entry per fact.
            self.audit_core.append(
                AuditCoreEntry(
                    id=f"entry-{len(self.audit_core) + 1:03d}",
                    v=1,
                    refId=inst_entry.id,
                    label=fact,
                )
            )
        return verdict

    # ---------------- redaction ----------------

    def redact(
        self,
        *,
        target_fact: str,
        reason: str,
        by: str,
        old_hash: str,
        new_hash: str,
        step: int,
    ) -> None:
        """Apply an L4-compliant modification: bump core version + append to immutable log.

        The audit log core IS the Institutional layer, so a redaction targets the core
        entry by its fact label (e.g. ``client_cleared``) rather than a raw event type.
        """
        core = next((c for c in self.audit_core if c.label == target_fact), None)
        if core is None:
            return
        core.v += 1
        self.changes.append(
            ChangeLogEntry(
                id=f"chg-{len(self.changes) + 1}",
                when=_ts(step, self._ev_count + 1),
                who=by,
                target=core.id,
                reason=reason,
                oldHash=old_hash,
                newHash=new_hash,
            )
        )
        self._ev_count += 1
