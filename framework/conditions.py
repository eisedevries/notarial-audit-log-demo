"""Gate conditions C1-C9 as small predicate functions.

Each takes a candidate group and a context dict; returns a (bool, explanation) tuple.
Explanations are used in failure verdicts; on success they may be omitted.
"""

from __future__ import annotations

from typing import Any

from domain import LogicEntry, RegistrationEntry

# ============== Reg|Log Gate (gate1): Registration -> Logic ==============


def C1(group: list[RegistrationEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Activator attribution: at least one entry in the group has an attributable activator."""
    if any(e.actor for e in group):
        return True, None
    return False, "no activator across group (batch-job style emission)"


def C2(group: list[RegistrationEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Shared correlation: all entries carry a correlation_ref sharing a common root (dossier id)."""
    refs = [e.correlation for e in group]
    if any(r is None for r in refs):
        offending = next(e for e in group if e.correlation is None)
        return False, f"no correlation_ref present on event #{offending.id}"
    roots = {r.split("/")[0] for r in refs if r}
    if len(roots) != 1:
        return False, f"events do not share a correlation root: {sorted(roots)}"
    return True, None


def C3(group: list[RegistrationEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Clock synchronisation: every entry carries a timestamp."""
    if all(e.t for e in group):
        return True, None
    return False, "one or more entries have no synchronised timestamp"


def C4(group: list[RegistrationEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Process step mapping: each entry's event_type appears in some spec scope."""
    g = ctx["governance"]
    in_scope: set[str] = set()
    for spec in g.specs:
        for ev in spec.get("scope", []) or []:
            in_scope.add(ev)
    unmapped = [e.type for e in group if e.type not in in_scope]
    if unmapped:
        return False, f"event types not scoped by any spec: {unmapped}"
    return True, None


def C5(group: list[RegistrationEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Cross-system linkability: if events span multiple sources, they share a correlation root.

    Satisfied implicitly when C2 holds; failing only when intra-/cross-system links
    cannot be reconstructed.
    """
    sources = {e.source for e in group}
    if len(sources) <= 1:
        return True, None  # single-source group: trivially linkable
    # If correlations agree (C2 passes), cross-system events are linkable.
    refs = {e.correlation for e in group if e.correlation}
    if not refs:
        return False, "cross-system group lacks any correlation ref"
    return True, None


# ============= Log|Inst Gate (gate2): Logic -> Institutional =============


def C6(logic_group: list[LogicEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Institutional context exists: a spec describes this institutional fact."""
    spec = ctx.get("spec")
    if spec is None:
        return False, f"no specification found for fact {ctx.get('fact')!r}"
    facts = spec.get("facts", []) or []
    fact = ctx.get("fact")
    if fact not in facts:
        return False, f"fact {fact!r} not in scope of spec {spec.get('id')!r}"
    return True, None


def C7(logic_group: list[LogicEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Integrity of log chain demonstrable.

    Enforces the 1..* cardinality on the Institutional side: an institutional
    fact must derive from at least one Logic entry. Demo proxy for chain integrity:
    every constituent Logic entry has at least one Registration ancestor. In
    production this is where chain-of-custody / hash verification would live.
    """
    if not logic_group:
        return False, "no Logic ancestors found (Institutional facts require 1..* Logic entries)"
    for lg in logic_group:
        if not lg.members:
            return False, f"logic entry {lg.id!r} has no registration ancestors"
    return True, None


def C8(logic_group: list[LogicEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Access governance documented (L7): every source feeding these Logic entries is registered."""
    g = ctx["governance"]
    sources = ctx.get("logic_source_ids", set())
    unregistered = sorted(s for s in sources if not g.is_registered_source(s))
    if unregistered:
        return False, f"source(s) not in log source registry: {unregistered}"
    return True, None


def C9(logic_group: list[LogicEntry], ctx: dict[str, Any]) -> tuple[bool, str | None]:
    """Retention classification assigned (L8)."""
    spec = ctx.get("spec")
    if spec is None or "retention" not in spec:
        return False, "no retention classification on the governing spec"
    return True, None


# ===================== Registry of all conditions =====================

GATE_1_CONDITIONS = [
    ("C1", C1),
    ("C2", C2),
    ("C3", C3),
    ("C4", C4),
    ("C5", C5),
]

GATE_2_CONDITIONS = [
    ("C6", C6),
    ("C7", C7),
    ("C8", C8),
    ("C9", C9),
]
