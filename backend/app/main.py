from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import contact, health
from app.core.config import settings

app = FastAPI(title=settings.APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["health"])
app.include_router(contact.router, prefix="/api", tags=["contact"])


@app.get("/")
async def root():
    return {"message": "Portfolio API is running"}