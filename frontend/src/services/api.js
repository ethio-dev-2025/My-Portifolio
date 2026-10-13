const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function sendContactForm(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    const detail =
      typeof body?.detail === "string"
        ? body.detail
        : "Failed to send message. Please try again.";
    throw new Error(detail);
  }

  return body;
}