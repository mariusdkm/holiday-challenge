from fastapi import APIRouter
from tortoise.contrib.fastapi import HTTPNotFoundError

from app.models import Offer_Pydantic, Offers

api_router = APIRouter()


@api_router.get("/offer/{price}", response_model=Offer_Pydantic, responses={404: {"model": HTTPNotFoundError}})
async def read_offer(price: int):
    offer = await Offer_Pydantic.from_queryset(Offers.get(price=price))
    return offer
