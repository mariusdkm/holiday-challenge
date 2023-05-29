import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
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

prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});

export default prisma;