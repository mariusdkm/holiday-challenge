// prisma/seed.ts
import { createReadStream } from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seedHotels() {
  const dataPath = path.resolve(__dirname, '../data/hotels.csv');
  const parser = createReadStream(dataPath).pipe(
    parse({
      columns: true,
      skip_empty_lines: true
    })
  );

  for await (const row of parser) {
    const hotel = {
      id: parseInt(row.hotelid),
      name: row.hotelname,
      stars: parseInt(row.hotelstars)
    };

    await prisma.hotel.create({
      data: hotel
    });
    console.log(`Created hotel with id: ${hotel.id}`);
  }
  console.log(`Seeding hotels finished.`);
}

async function seedOffers() {
  const dataPath = path.resolve(__dirname, '../data/offers_head.csv');
  const parser = createReadStream(dataPath).pipe(
    parse({
      columns: true,
      skip_empty_lines: true
    })
  );

  for await (const row of parser) {
    const outbounddeparturedatetime = new Date(row.outbounddeparturedatetime);
    const inboundarrivaldatetime = new Date(row.inboundarrivaldatetime);
    const offer = {
      hotelid: parseInt(row.hotelid),
      outbounddeparturedatetime: outbounddeparturedatetime,
      inbounddeparturedatetime: new Date(row.inbounddeparturedatetime),
      countadults: parseInt(row.countadults),
      countchildren: parseInt(row.countchildren),
      price: parseFloat(row.price),
      inbounddepartureairport: row.inbounddepartureairport,
      outboundarrivalairport: row.outboundarrivalairport,
      inboundarrivaldatetime: inboundarrivaldatetime,
      outbounddepartureairport: row.outbounddepartureairport,
      inboundarrivalairport: row.inboundarrivalairport,
      outboundarrivaldatetime: new Date(row.outboundarrivaldatetime),
      mealtype: row.mealtype,
      oceanview: row.oceanview === 'true',
      roomtype: row.roomtype,
      days: (inboundarrivaldatetime.getTime() - outbounddeparturedatetime.getTime()) / (1000 * 3600 * 24),
    };

    await prisma.offer.create({
      data: offer
    });
  }
  console.log(`Seeding hotels finished.`);
}

async function main() {
  console.log(`Start seeding ...`);

  await seedHotels();
  // await seedOffers();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });