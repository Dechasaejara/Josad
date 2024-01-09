/*
  Warnings:

  - You are about to drop the column `experienceLevel` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the `_JobToJobCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JobToJobCategory" DROP CONSTRAINT "_JobToJobCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobToJobCategory" DROP CONSTRAINT "_JobToJobCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_authorId_fkey";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "experienceLevel",
DROP COLUMN "type",
ADD COLUMN     "jobCategoryId" INTEGER,
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "_JobToJobCategory";

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
