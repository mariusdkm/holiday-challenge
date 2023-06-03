import { Prisma, PrismaClient } from '@prisma/client';
import type { SearchParams } from './parseSearchParams';

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query'
    }
  ]
});

export type OfferWithHotel = Prisma.OfferGetPayload<{
  include: {
    hotel: true;
  }
}>

export type SearchResult = {
  hotelid: number
  name: string
  price: number
  stars: number
  startdate: Date
  enddate: Date
}


export async function getHotelOffers(searchParams: SearchParams): Promise<SearchResult[]> {
  searchParams.endDate.setDate(searchParams.endDate.getDate() - searchParams.days);

  return prisma.$queryRaw`
      SELECT hotel.id                             as hotelid,
             hotel.name                           as name,
             hotel.stars                          as stars,
             min(offer.price)                     as price,
             min(offer.outbounddeparturedatetime) as startdate,
             max(offer.inboundarrivaldatetime)    as enddate
      FROM "Offer" offer
               JOIN "Hotel" hotel on offer.hotelid = hotel.id
      WHERE offer.days = ${searchParams.days}::integer
        AND offer.outbounddepartureairport in (${Prisma.join(searchParams.departureAirports)})
        AND offer.countadults = ${searchParams.adults}::integer
        AND offer.countchildren = ${searchParams.children}::integer
        AND offer.outbounddeparturedatetime > ${searchParams.startDate.toISOString()}::timestamp without time zone
        AND offer.outbounddeparturedatetime < ${searchParams.endDate.toISOString()}::timestamp without time zone
      GROUP BY hotel.id, hotel.stars, hotel.name`;
}

export async function getOffersForHotel(searchParams: SearchParams, hotelId: number) {
  searchParams.endDate.setDate(searchParams.endDate.getDate() - searchParams.days);
  return prisma.offer.findMany({
    where: {
      hotelid: hotelId,
      outbounddepartureairport: { in: searchParams.departureAirports },
      days: searchParams.days,
      countadults: searchParams.adults,
      countchildren: searchParams.children,
      outbounddeparturedatetime: { gt: searchParams.startDate.toISOString(), lt: searchParams.endDate.toISOString() }
    }
  });
}

prisma.$on('query', async (e) => {
  console.log(`${e.query} ${e.params}`);
});

export default prisma;