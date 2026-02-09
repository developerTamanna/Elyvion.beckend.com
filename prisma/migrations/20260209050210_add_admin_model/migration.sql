/*
  Warnings:

  - You are about to alter the column `expired_date` on the `customer_tasks` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expired_date` on the `transaction_records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `approved_date` on the `withdrawals` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `customer_tasks` MODIFY `expired_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `transaction_records` MODIFY `expired_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `withdrawals` MODIFY `approved_date` DATETIME NULL;

-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `password` VARCHAR(255) NULL,
    `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
    `whatsappUrl` VARCHAR(255) NULL,
    `telegramUrl1` VARCHAR(255) NULL,
    `whatsappUrl2` VARCHAR(255) NULL,
    `whatsappUrl3` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
