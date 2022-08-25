/*
  Warnings:

  - You are about to drop the column `userUser_id` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_userUser_id_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "userUser_id";

-- DropTable
DROP TABLE "user";
