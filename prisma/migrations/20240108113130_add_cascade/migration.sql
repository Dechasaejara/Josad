/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Remote_Part_Time', 'Remote_Full_Time', 'On_Site_Full_Time', 'On_Site_Part_Time', 'Contractual', 'Intern_Unpaid', 'Intern_Paid');

-- CreateEnum
CREATE TYPE "Experience" AS ENUM ('Entry_Level', 'Junior', 'Mid_Senior', 'Senior', 'Expert');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'Recruiter', 'Job_Seeker');

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq'),
ALTER COLUMN "name" DROP NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" DEFAULT 'USER';
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "applyLink" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "postedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isInHouse" BOOLEAN NOT NULL DEFAULT false,
    "salary" INTEGER NOT NULL,
    "type" "Type" DEFAULT 'On_Site_Full_Time',
    "country" TEXT NOT NULL,
    "experienceLevel" "Experience" DEFAULT 'Junior',
    "isNotReady" BOOLEAN NOT NULL DEFAULT true,
    "authorId" INTEGER NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "parent" INTEGER,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobToJobCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_userId_key" ON "accounts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToJobCategory_AB_unique" ON "_JobToJobCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToJobCategory_B_index" ON "_JobToJobCategory"("B");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToJobCategory" ADD CONSTRAINT "_JobToJobCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToJobCategory" ADD CONSTRAINT "_JobToJobCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
