CREATE EXTENSION IF NOT EXISTS btree_gist;
CREATE INDEX idx_offer_search_gist
    ON "Offer"
        USING gist
        (days, outbounddepartureairport, countadults, countchildren, outbounddeparturedatetime, hotelid);


BEGIN;
DROP INDEX idx_offer_search_3;
DROP INDEX idx_offer_search_2;
DROP INDEX idx_offer_search;
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
  AND offer.outbounddepartureairport in ('DUS', 'FRA', 'STR', 'BER', 'HAM')
  AND offer.countadults = 2
  AND offer.countchildren = 0
--   AND '(2023-07-31T22:00:00.000Z, 2023-08-10T00:00:00.006Z)'::daterange @> offer.outbounddeparturedatetime::date
  AND '2023-07-31T22:00:00.000Z' < offer.outbounddeparturedatetime
  AND '2023-09-10T00:00:00.006Z' > offer.outbounddeparturedatetime
GROUP BY hotel.id, hotel.stars, hotel.name;
ROLLBACK;
