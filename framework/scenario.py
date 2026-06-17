"""Scenario runner. Loads the selected example's walkthrough + tampers.yaml; applies a step to the pipeline."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

from .pipeline import Pipeline

SCENARIO_DIR = Path(__file__).parent.parent / "processes"

# Selectable examples -> walkthrough file. Each is an independent run through the
# same three-layer model; the gate conditions and principles are shared/frozen.
EXAMPLES: dict[str, str] = {
    "deed": "walkthrough-deed.yaml",          # process-completion: transfer of a deed
    "register": "walkthrough-register.yaml",  # access-logging: Register Notariaat consultation
    "cdr": "walkthrough-cdr.yaml",            # access-logging: content-blind CDR deed consultation
}
DEFAULT_EXAMPLE = "deed"


class Walkthrough:
    """Holds the canonical step list (for one example) and the tamper overlays."""

    def __init__(self, example: str = DEFAULT_EXAMPLE) -> None:
        self.example: str = example if example in EXAMPLES else DEFAULT_EXAMPLE
        with (SCENARIO_DIR / EXAMPLES[self.example]).open() as f:
            self.steps: list[dict[str, Any]] = yaml.safe_load(f)["steps"]
        with (SCENARIO_DIR / "tampers.yaml").open() as f:
            self.tampers: dict[str, list[dict[str, Any]]] = yaml.safe_load(f) or {}

    def total(self) -> int:
        return len(self.steps)

    def get_step(self, idx: int) -> dict[str, Any]:
        return self.steps[idx]

    def get_tampers_for(self, scenario: str, step_id: int) -> list[dict[str, Any]]:
        return [t for t in self.tampers.get(scenario, []) if t["step"] == step_id]


def _apply_tamper(event: dict[str, Any], tamper: dict[str, Any]) -> dict[str, Any]:
    if tamper["op"] == "drop_field":
        result = {k: v for k, v in event.items() if k != tamper["field"]}
        result["_tamper"] = tamper.get("tamper", "tampered")
        return result
    if tamper["op"] == "rewrite_field":
        result = dict(event)
        result[tamper["field"]] = tamper["value"]
        result["_tamper"] = tamper.get("tamper", "tampered")
        return result
    return event


def apply_step(
    pipeline: Pipeline,
    walkthrough: Walkthrough,
    step_idx: int,
    scenario: str,
) -> None:
    """Apply the directives of one step (after the cursor advanced to step_idx)."""
    step = walkthrough.get_step(step_idx)
    step_id: int = step["id"]
    tampers = walkthrough.get_tampers_for(scenario, step_id)

    # 1. Emit registration events (with optional tampering).
    for ev in step.get("emit") or []:
        event = dict(ev)
        for t in tampers:
            if event.get("type") == t.get("match_type"):
                event = _apply_tamper(event, t)
        pipeline.ingest_event(event, step_id)

    # 2. Run any Reg|Log Gate (gate1) groups defined for this step.
    for g1 in step.get("gate1") or []:
        pipeline.run_gate1(
            action=g1["action"],
            activator=g1["activator"],
            spec_id=g1["spec"],
            member_types=g1["members"],
            step=step_id,
            correlation=g1.get("correlation"),
        )

    # 3. Run any Log|Inst Gate (gate2) groups defined for this step.
    for g2 in step.get("gate2") or []:
        pipeline.run_gate2(
            fact=g2["fact"],
            logic_actions=g2["logics"],
            spec_id=g2["spec"],
            step=step_id,
            correlation=g2.get("correlation"),
        )

    # 4. Apply redaction, if any.
    red = step.get("redaction")
    if red:
        pipeline.redact(
            target_fact=red["target"],
            reason=red["reason"],
            by=red["by"],
            old_hash=red["old_hash"],
            new_hash=red["new_hash"],
            step=step_id,
        )


def replay_to(pipeline: Pipeline, walkthrough: Walkthrough, cursor: int, scenario: str) -> None:
    """Reset the pipeline and replay steps 1..cursor inclusive."""
    pipeline.reset()
    for i in range(1, cursor + 1):
        if i < walkthrough.total():
            apply_step(pipeline, walkthrough, i, scenario)
