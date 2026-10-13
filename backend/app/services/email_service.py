import resend

from app.core.config import settings
from app.schemas.contact import ContactRequest
from app.utils.logger import logger


resend.api_key = settings.RESEND_API_KEY


def _build_html(payload: ContactRequest) -> str:
    return f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px;">
        <h2 style="color: #111; margin-bottom: 4px;">New contact form submission</h2>
        <p style="color: #666; margin-top: 0; font-size: 13px;">
          From your portfolio contact form
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p><strong>Name:</strong> {payload.name}</p>
        <p><strong>Email:</strong> {payload.email}</p>
        <p><strong>Subject:</strong> {payload.subject or "(none)"}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="white-space: pre-wrap;">{payload.message}</p>
      </body>
    </html>
    """


def _build_text(payload: ContactRequest) -> str:
    return (
        f"New contact form submission\n"
        f"-----------------------------\n"
        f"Name:    {payload.name}\n"
        f"Email:   {payload.email}\n"
        f"Subject: {payload.subject or '(none)'}\n\n"
        f"Message:\n{payload.message}\n"
    )


async def send_contact_email(payload: ContactRequest) -> None:
    if not settings.RESEND_API_KEY:
        raise RuntimeError("RESEND_API_KEY is not configured")

    if not settings.EMAIL_TO:
        raise RuntimeError("EMAIL_TO is not configured")

    logger.info("Sending email via Resend to %s", settings.EMAIL_TO)

    resend.Emails.send({
        "from": f"{settings.EMAIL_FROM_NAME} <{settings.EMAIL_FROM}>",
        "to": [settings.EMAIL_TO],
        "reply_to": str(payload.email),
        "subject": payload.subject or f"New message from {payload.name}",
        "html": _build_html(payload),
        "text": _build_text(payload),
    })

    logger.info("Contact email sent successfully from %s", payload.email)