"""Precompute every (scenario, cursor) payload into frontend/states.js.

The app is a pure function of (scenario, cursor): for each cursor the pipeline is
reset and replayed from scratch (see framework.scenario.replay_to), with no
persistence, randomness, or timestamps. So every reachable state can be
enumerated ahead of time and shipped to the browser, making the runtime fully
stateless: interactions are local cursor changes, the backend never mutates.

Re-run whenever the walkthroughs, governance YAML, or serialization change:
    cd Local_demo/demo
    ../venv/bin/python build_states.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

DEMO_DIR = Path(__file__).parent
if str(DEMO_DIR) not in sys.path:
    sys.path.insert(0, str(DEMO_DIR))

from api.serialization import state_payload
from framework import Pipeline
from framework.scenario import DEFAULT_EXAMPLE, EXAMPLES, Walkthrough, replay_to
from governance.registry import Governance

OUT = DEMO_DIR / "frontend" / "states.js"


def build() -> dict:
    governance = Governance()
    states: dict[str, list] = {}
    gov_payload: dict | None = None

    for scenario in EXAMPLES:
        walkthrough = Walkthrough(scenario)
        pipeline = Pipeline(governance)
        entries = []
        for cursor in range(walkthrough.total()):
            replay_to(pipeline, walkthrough, cursor, scenario)
            payload = state_payload(pipeline, walkthrough, governance, cursor, scenario)
            # Governance is identical for every state -> store it once, drop the copies.
            if gov_payload is None:
                gov_payload = payload["governance"]
            payload.pop("governance", None)
            entries.append(payload)
        states[scenario] = entries

    return {"default": DEFAULT_EXAMPLE, "governance": gov_payload, "states": states}


def main() -> None:
    data = build()
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    OUT.write_text(f"window.PRECOMPUTED = {body};\n", encoding="utf-8")
    n = sum(len(v) for v in data["states"].values())
    print(f"wrote {OUT.relative_to(DEMO_DIR)} ({n} states, {OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
