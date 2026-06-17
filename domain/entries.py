"""Three-layer entry types. Pure data; no behaviour.

Field names match the shape consumed by the existing frontend so components.jsx
can stay unchanged.
"""

from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field


class RegistrationEntry(BaseModel):
    """Layer 1: atomic observed event from a registered source."""

    id: str
    source: str
    type: str
    sev: int = Field(ge=2, le=6, description="RFC 5424 severity (2..6)")
    correlation: str | None = None
    actor: str | None = None
    attrs: dict[str, Any] = Field(default_factory=dict)
    step: int
    t: str
    tamper: str | None = Field(default=None, alias="_tamper")

    model_config = {"populate_by_name": True}


class LogicEntry(BaseModel):
    """Layer 2: functional action; aggregates 1..* Registration entries."""

    id: str
    action: str
    activator: str
    spec: str
    members: list[str]
    step: int
    # Fig 5.5 attributes (computed by the pipeline from members, demo-essential subset).
    target: str | None = None
    status: str = "completed"
    trace_id: str | None = None
    span_start: str | None = None
    span_end: str | None = None


class InstitutionalEntry(BaseModel):
    """Layer 3: institutional fact; grounded in 1..* Logic entries."""

    id: str
    fact: str
    logics: list[str]
    spec: str
    step: int
