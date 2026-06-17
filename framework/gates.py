"""Gate evaluation. Pure functions over (group, context) -> GateVerdict."""

from __future__ import annotations

from typing import Any, Callable

from domain import GateVerdict, LogicEntry, RegistrationEntry

from .conditions import GATE_1_CONDITIONS, GATE_2_CONDITIONS

CondFn = Callable[[list, dict[str, Any]], tuple[bool, str | None]]


def _run(
    gate_n: int,
    group: list,
    ctx: dict[str, Any],
    conditions: list[tuple[str, CondFn]],
) -> tuple[dict[str, bool], str | None]:
    results: dict[str, bool] = {}
    note: str | None = None
    for name, fn in conditions:
        ok, why = fn(group, ctx)
        results[name] = ok
        if not ok and note is None:
            note = why
    return results, note


def gate1_evaluate(
    group: list[RegistrationEntry],
    *,
    action: str,
    step: int,
    governance,
) -> GateVerdict:
    """Evaluate the Reg|Log Gate over a candidate Registration group.

    Returns a verdict; the pipeline decides whether to promote.
    """
    ctx: dict[str, Any] = {"governance": governance}
    results, note = _run(1, group, ctx, GATE_1_CONDITIONS)
    return GateVerdict(
        gate=1,
        action=action,
        members=[e.id for e in group],
        conditions=results,
        passed=all(results.values()),
        note=note,
        step=step,
    )


def gate2_evaluate(
    logic_group: list[LogicEntry],
    *,
    fact: str,
    spec_id: str,
    step: int,
    governance,
    registration_lookup: dict[str, RegistrationEntry],
) -> GateVerdict:
    """Evaluate the Log|Inst Gate over a candidate Logic group.

    The spec is looked up by id (spec_id); the source set is computed from the
    Registration ancestors of each Logic entry.
    """
    spec = governance.find_spec(spec_id)
    logic_source_ids: set[str] = set()
    for lg in logic_group:
        for member_id in lg.members:
            r = registration_lookup.get(member_id)
            if r is not None:
                logic_source_ids.add(r.source)

    ctx: dict[str, Any] = {
        "governance": governance,
        "spec": spec,
        "fact": fact,
        "logic_source_ids": logic_source_ids,
    }
    results, note = _run(2, logic_group, ctx, GATE_2_CONDITIONS)
    return GateVerdict(
        gate=2,
        fact=fact,
        logics=[lg.id for lg in logic_group],
        conditions=results,
        passed=all(results.values()),
        note=note,
        step=step,
    )
