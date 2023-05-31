COPY "Offer" ("hotelid", "outbounddeparturedatetime", "inbounddeparturedatetime", "countadults", "countchildren",
              "price", "inbounddepartureairport", "outboundarrivalairport", "inboundarrivaldatetime",
              "outbounddepartureairport", "inboundarrivalairport", "outboundarrivaldatetime", "mealtype", "oceanview",
              "roomtype")
    FROM 'offers.csv'
    WITH (FORMAT csv, HEADER true);

UPDATE "Offer"
SET "days" = DATE_PART('day', inboundarrivaldatetime - outbounddeparturedatetime)::INTEGER;


CREATE INDEX idx_offer_search
    ON "Offer"
        (days, outbounddepartureairport, countadults, countchildren, outbounddeparturedatetime, hotelid);

CREATE INDEX idx_offer_hotelid_bst ON "Offer" (hotelid);
CREATE INDEX idx_offer_hotelid_hash ON "Offer" USING HASH (hotelid);

CREATE INDEX idx_hotel_id_hash ON "Hotel" USING HASH (id);
CREATE INDEX idx_hotel_id_bst ON "Hotel" (id);
