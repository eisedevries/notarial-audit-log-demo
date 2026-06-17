"""Audit logging unit: dual-store types and crosslinks."""

from __future__ import annotations

from pydantic import BaseModel


class Trace(BaseModel):
    """A bundle of crosslinked identifiers for one Registration entry."""

    id: str
    local: str
    external: list[str]


class AuditCoreEntry(BaseModel):
    """Mutable audit log core entry. May be modified under governance."""

    id: str
    v: int = 1
    refId: str
    label: str


class ChangeLogEntry(BaseModel):
    """Immutable change log entry. Append-only; records modifications to core."""

    id: str
    when: str
    who: str
    target: str
    reason: str
    oldHash: str
    newHash: str
