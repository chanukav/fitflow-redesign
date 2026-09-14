# Starts the FastAPI application for workout generation and ML workflows.
from fastapi import FastAPI

app = FastAPI(title="FitFlow AI Service")


@app.get("/health")
def health_check() -> dict[str, str]:
    """Provide a lightweight service health response."""
    return {"status": "ok"}
