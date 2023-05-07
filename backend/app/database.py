import csv

from app.models import Offers


async def fill_database():
    with open('data/offers_head.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            await Offers.create(
                hotelid=row['hotelid'],
                outbounddeparturedatetime=row['outbounddeparturedatetime'],
                inbounddeparturedatetime=row['inbounddeparturedatetime'],
                countadults=row['countadults'],
                countchildren=row['countchildren'],
                price=row['price'],
                inbounddepartureairport=row['inbounddepartureairport'],
                inboundarrivalairport=row['inboundarrivalairport'],
                inboundarrivaldatetime=row['inboundarrivaldatetime'],
                outbounddepartureairport=row['outbounddepartureairport'],
                outboundarrivalairport=row['outboundarrivalairport'],
                outboundarrivaldatetime=row['outboundarrivaldatetime'],
                mealtype=row['mealtype'],
                oceanview=row['oceanview'],
                roomtype=row['roomtype']
            )

