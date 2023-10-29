/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `contact` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contact_email_key" ON "contact"("email");
