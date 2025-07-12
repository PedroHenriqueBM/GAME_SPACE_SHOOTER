/*
  Warnings:

  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE `users` SET `password` = 'changeme123' WHERE `password` IS NULL;
ALTER TABLE `users` MODIFY COLUMN `password` CHAR(60) NOT NULL;
