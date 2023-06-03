import type { PageServerLoad } from './$types';
import { getHotelOffers } from '../../utils/prisma';
import { paramsToRedisKey, parseSearchParams } from '../../utils/parseSearchParams';
import { error } from '@sveltejs/kit';
import { getCachedQuery } from '../../utils/redis';

export const load = (async ({ url }) => {

  const searchParams = parseSearchParams(url);
  if (searchParams === null) {
    throw error(400, 'Wrong search parameters');
  }

  const redisKey = paramsToRedisKey(searchParams);
  const offers = await getCachedQuery(redisKey, () => getHotelOffers(searchParams));

  return {
    offers: offers
  };
}) satisfies PageServerLoad;