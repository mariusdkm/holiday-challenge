-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "hotelid" INTEGER NOT NULL,
    "outbounddeparturedatetime" TIMESTAMP(3) NOT NULL,
    "inbounddeparturedatetime" TIMESTAMP(3) NOT NULL,
    "countadults" INTEGER NOT NULL,
    "countchildren" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "inbounddepartureairport" TEXT NOT NULL,
    "inboundarrivalairport" TEXT NOT NULL,
    "inboundarrivaldatetime" TIMESTAMP(3) NOT NULL,
    "outbounddepartureairport" TEXT NOT NULL,
    "outboundarrivalairport" TEXT NOT NULL,
    "outboundarrivaldatetime" TIMESTAMP(3) NOT NULL,
    "mealtype" TEXT NOT NULL,
    "oceanview" BOOLEAN NOT NULL,
    "roomtype" TEXT NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_hotelid_fkey" FOREIGN KEY ("hotelid") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
