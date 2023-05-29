import type { PageServerLoad } from './$types';
import type { SearchResult } from '../../utils/prisma';
import prisma from '../../utils/prisma';
import { parseSearchParams } from '../../utils/parseSearchParams';
import { Prisma } from '@prisma/client';

export const load = (async ({ url }) => {

  const searchParams = parseSearchParams(url);

  console.log(searchParams);


  const offers: [SearchResult] = [{
    hotelid: 1,
    name: 'Hotel',
    stars: 5,
    price: 100,
    startdate: new Date(),
    enddate: new Date()
  }];

  searchParams.endDate.setDate(searchParams.endDate.getDate() - searchParams.days);
  console.log(searchParams.startDate.toISOString());

  const offersb =
    await prisma.$queryRaw`
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
        GROUP BY hotel.id, hotel.stars, hotel.name LIMIT 10`;

  return {
    offers: offersb
  };
}) satisfies PageServerLoad;