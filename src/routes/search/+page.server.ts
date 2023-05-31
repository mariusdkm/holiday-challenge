import type { PageServerLoad } from './$types';
import prisma from '../../utils/prisma';
import { parseSearchParams } from '../../utils/parseSearchParams';
import { Prisma } from '@prisma/client';
import { error } from '@sveltejs/kit';

export const load = (async ({ url }) => {

  const searchParams = parseSearchParams(url);
  if (searchParams === null) {
    return error(400, 'Wrong search parameters');
  }

  searchParams.endDate.setDate(searchParams.endDate.getDate() - searchParams.days);

  const offers =
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
        GROUP BY hotel.id, hotel.stars, hotel.name
        LIMIT ${searchParams.limit}`;


  return {
    offers: offers,
    modifiedSearch: new URLSearchParams({
      ...searchParams,
      limit: searchParams.limit + 10
    }).toString()
  };
}) satisfies PageServerLoad;