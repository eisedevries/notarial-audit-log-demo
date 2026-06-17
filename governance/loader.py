"""Governance YAML loader.

Reads principles, log sources, specifications, and schemas at startup.
Returns plain dicts/lists; the rest of the system treats them as read-only.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

GOV_DIR = Path(__file__).parent


def _load_yaml(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_principles() -> list[dict[str, Any]]:
    return _load_yaml(GOV_DIR / "principles.yaml")


def load_log_sources() -> list[dict[str, Any]]:
    return _load_yaml(GOV_DIR / "log_sources.yaml")


def load_specs() -> list[dict[str, Any]]:
    """One spec per YAML file under specs/."""
    return [_load_yaml(p) for p in sorted((GOV_DIR / "specs").glob("*.yaml"))]


def load_schemas() -> list[dict[str, Any]]:
    """One schema per YAML file under schemas/."""
    return [_load_yaml(p) for p in sorted((GOV_DIR / "schemas").glob("*.yaml"))]
