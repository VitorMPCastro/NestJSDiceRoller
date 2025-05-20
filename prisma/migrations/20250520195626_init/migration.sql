-- CreateTable
CREATE TABLE "DiceRoll" (
    "id" SERIAL NOT NULL,
    "sides" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiceRoll_pkey" PRIMARY KEY ("id")
);
