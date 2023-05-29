COPY "Offer" ("hotelid", "outbounddeparturedatetime", "inbounddeparturedatetime", "countadults", "countchildren",
              "price", "inbounddepartureairport", "outboundarrivalairport", "inboundarrivaldatetime",
              "outbounddepartureairport", "inboundarrivalairport", "outboundarrivaldatetime", "mealtype", "oceanview",
              "roomtype")
    FROM 'offers.csv'
    WITH (FORMAT csv, HEADER true);

UPDATE "Offer"
SET "days" = DATE_PART('day', inboundarrivaldatetime - outbounddeparturedatetime)::INTEGER;

CREATE INDEX idx_offer_search
    ON "Offer" (days, outbounddepartureairport, countadults, countchildren, outbounddeparturedatetime, hotelid);

CREATE INDEX idx_offer_search_gist
    ON "Offer" USING gist (days, outbounddepartureairport, countadults, countchildren, outbounddeparturedatetime,
                           hotelid);

CREATE INDEX hotel_hash_id ON "Hotel" USING HASH (id);
CREATE INDEX idx_hotel_id_bst ON "Hotel" (id);
CREATE INDEX idx_offer_hotelid_bst ON "Offer" (hotelid);


CREATE INDEX idx_offer_hash_hotelid ON "Offer" USING HASH (hotelid);

CREATE EXTENSION IF NOT EXISTS btree_gist;

BEGIN;
-- DROP INDEX idx_offer_search_gist;
EXPLAIN ANALYSE
SELECT hotel.id                             as hotelid,
       hotel.name                           as name,
       hotel.stars                          as stars,
       min(offer.price)                     as price,
       min(offer.outbounddeparturedatetime) as startdate,
       max(offer.inboundarrivaldatetime)    as enddate
FROM "Offer" offer
         JOIN "Hotel" hotel on offer.hotelid = hotel.id
WHERE offer.days = 7
  AND offer.outbounddepartureairport in ('DUS', 'FRA', 'STR', 'BER')
  AND offer.countadults = 2
  AND offer.countchildren = 0
--   AND '(2023-07-31T22:00:00.000Z, 2023-08-10T00:00:00.006Z)'::daterange @> offer.outbounddeparturedatetime::date
  AND '2023-07-31T22:00:00.000Z' < offer.outbounddeparturedatetime
  AND '2023-08-10T00:00:00.006Z' > offer.outbounddeparturedatetime
GROUP BY hotel.id, hotel.stars, hotel.name;
ROLLBACK;
