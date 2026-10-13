from fastapi import APIRouter, HTTPException, status

from app.schemas.contact import ContactRequest, ContactResponse
from app.services.email_service import send_contact_email
from app.utils.logger import logger

router = APIRouter()


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_200_OK,
)
async def contact(payload: ContactRequest) -> ContactResponse:
    try:
        await send_contact_email(payload)
    except Exception as exc:
        logger.exception("Failed to send contact email: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Message could not be sent. Please try again later.",
        )

    return ContactResponse(
        ok=True,
        message="Thanks for reaching out! I'll reply within 24 hours.",
    )