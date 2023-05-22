import type { PageServerLoad } from './$types';
import prisma from '../../../utils/prisma';

export const load = (async ({ params }) => {
  const response = await prisma.hotel.findMany({
    where: { id: Number(params.id) },
    select: { id: true, name: true, stars: true }
  });
  return {
    hotel: response
  };
}) satisfies PageServerLoad;