from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    r = client.get("/api/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_contact_validation_fails_on_short_message():
    r = client.post(
        "/api/contact",
        json={"name": "Jo", "email": "jo@example.com", "message": "hi"},
    )
    assert r.status_code == 422