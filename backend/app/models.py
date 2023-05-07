from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator
from tortoise.models import Model


class Offers(Model):
    id = fields.IntField(pk=True)
    hotelid = fields.IntField()
    outbounddeparturedatetime = fields.DatetimeField()
    inbounddeparturedatetime = fields.DatetimeField()
    countadults = fields.IntField()
    countchildren = fields.IntField()
    price = fields.IntField()
    inbounddepartureairport = fields.CharField(max_length=3)
    inboundarrivalairport = fields.CharField(max_length=3)
    inboundarrivaldatetime = fields.DatetimeField()
    outbounddepartureairport = fields.CharField(max_length=3)
    outboundarrivalairport = fields.CharField(max_length=3)
    outboundarrivaldatetime = fields.DatetimeField()
    mealtype = fields.CharField(max_length=20)
    oceanview = fields.BooleanField()
    roomtype = fields.CharField(max_length=20)

    class Meta:
        table = 'offers'

Offer_Pydantic = pydantic_model_creator(Offers, name="Offer")
