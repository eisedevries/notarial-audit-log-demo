"""Runtime accessors over governance data.

Loaded once at startup; consulted by the framework and the API.
"""

from __future__ import annotations

from typing import Any

from . import loader


class Governance:
    """Single immutable bundle of governance data loaded from YAML."""

    def __init__(self) -> None:
        self.principles: list[dict[str, Any]] = loader.load_principles()
        self.log_sources: list[dict[str, Any]] = loader.load_log_sources()
        self.specs: list[dict[str, Any]] = loader.load_specs()
        self.schemas: list[dict[str, Any]] = loader.load_schemas()

        self._log_source_ids: set[str] = {s["id"] for s in self.log_sources}
        self._spec_by_id: dict[str, dict[str, Any]] = {s["id"]: s for s in self.specs}
        self._spec_by_domain: dict[str, dict[str, Any]] = {s["domain"]: s for s in self.specs}

    def is_registered_source(self, source_id: str) -> bool:
        """L7: only registered sources contribute to institutional facts."""
        return source_id in self._log_source_ids

    def find_spec(self, spec_id: str) -> dict[str, Any] | None:
        return self._spec_by_id.get(spec_id)

    def find_spec_by_domain(self, domain: str) -> dict[str, Any] | None:
        """Used by Log|Inst Gate C6: institutional context exists for this process domain."""
        return self._spec_by_domain.get(domain)
