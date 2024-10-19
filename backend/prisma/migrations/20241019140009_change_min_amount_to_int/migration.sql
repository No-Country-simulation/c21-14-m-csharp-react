/*
  Warnings:

  - Changed the type of `minAmount` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "minAmount",
ADD COLUMN     "minAmount" INTEGER NOT NULL;
