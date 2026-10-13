from slowapi import Limiter
from slowapi.util import get_remote_address

# Simple rate limiter (optional — install `slowapi` if you want to use it)
limiter = Limiter(key_func=get_remote_address)