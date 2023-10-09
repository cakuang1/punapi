-- CreateTable
CREATE TABLE "Puns" (
    "id" SERIAL NOT NULL,
    "pun" TEXT NOT NULL,

    CONSTRAINT "Puns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Puns_pun_key" ON "Puns"("pun");
