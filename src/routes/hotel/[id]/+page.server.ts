import type { PageServerLoad } from './$types';
import prisma, { getOffersForHotel } from '../../../utils/prisma';
import { paramsToRedisKey, parseSearchParams } from '../../../utils/parseSearchParams';
import { error } from '@sveltejs/kit';
import { getCachedQuery } from '../../../utils/redis';

export const load = (async ({ params, url }) => {
  const searchParams = parseSearchParams(url);
  if (searchParams === null) {
    throw error(400, 'Wrong search parameters');
  }

  if (params.id === undefined) {
    throw error(400, 'Please supply hotel id');
  }

  const redisKey = params.id + paramsToRedisKey(searchParams);

  const offers = await getCachedQuery(redisKey, () => getOffersForHotel(searchParams, Number(params.id)));

  const hotel = await prisma.hotel.findFirst({
    where: { id: Number(params.id) }
  });

  return {
    hotel: hotel,
    offers: offers
  };
}) satisfies PageServerLoad;
