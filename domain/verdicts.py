"""Gate verdicts and condition results."""

from __future__ import annotations

from pydantic import BaseModel


class GateVerdict(BaseModel):
    """Result of evaluating a gate against a candidate group."""

    gate: int
    action: str | None = None
    fact: str | None = None
    members: list[str] = []
    logics: list[str] = []
    conditions: dict[str, bool]
    passed: bool
    note: str | None = None
    step: int
