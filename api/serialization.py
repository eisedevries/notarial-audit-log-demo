"""Pipeline + walkthrough state → JSON payload the frontend consumes.

Field names align with the existing components.jsx so the frontend stays unchanged.
"""

from __future__ import annotations

from typing import Any

from framework import Pipeline
from framework.scenario import Walkthrough
from governance.registry import Governance


def state_payload(
    pipeline: Pipeline,
    walkthrough: Walkthrough,
    governance: Governance,
    cursor: int,
    scenario: str,
) -> dict[str, Any]:
    step = walkthrough.get_step(cursor)
    return {
        "state": {
            "reg": [r.model_dump(by_alias=True, exclude_none=True) for r in pipeline.reg],
            "logic": [l.model_dump() for l in pipeline.logic],
            "inst": [i.model_dump() for i in pipeline.inst],
            "verdicts": [v.model_dump(exclude_none=True) for v in pipeline.verdicts],
            "traces": [t.model_dump() for t in pipeline.traces],
            "changes": [c.model_dump() for c in pipeline.changes],
            "auditCore": [c.model_dump() for c in pipeline.audit_core],
        },
        "cursor": cursor,
        "total": walkthrough.total(),
        "scenario": scenario,
        "step": step,
        "governance": {
            "principles": governance.principles,
            "log_sources": governance.log_sources,
            "specs": governance.specs,
            "schemas": governance.schemas,
        },
    }
