"""Optional static server for the demo.

The app is fully static: all states are precomputed into frontend/states.js by
build_states.py, so any static web server can serve the frontend/ directory.
This bundled server is just one option:

    cd Local_demo/demo
    ../venv/bin/python -m uvicorn main:app --port 8000

Then open http://localhost:8000/
"""

from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

FRONTEND_DIR = Path(__file__).parent / "frontend"

app = FastAPI(title="Audit Framework Demo")
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
