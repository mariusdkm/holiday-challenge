import type { PageServerLoad } from './$types';
import prisma from '../../../utils/prisma';
import { parseSearchParams } from '../../../utils/parseSearchParams';

export const load = (async ({ params, url }) => {
  const searchParams = parseSearchParams(url);
  const offers = await prisma.offer.findMany({
    where: {
      hotelid: Number(params.id),
      outbounddepartureairport: { in: searchParams.departureAirports },
      days: searchParams.days,
      countadults: searchParams.adults,
      countchildren: searchParams.children,
      outbounddeparturedatetime: { gt: searchParams.startDate.toISOString(), lt: searchParams.endDate.toISOString() }
    },
    take: 10
  });
  const hotel = await prisma.hotel.findFirst({
    where: { id: Number(params.id) }
  });

  return {
    hotel: hotel,
    offers: offers
  };
}) satisfies PageServerLoad;
