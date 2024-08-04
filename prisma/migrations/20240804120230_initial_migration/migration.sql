-- CreateTable
CREATE TABLE `Manufacturer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ManufacturerName` VARCHAR(191) NOT NULL,
    `ManufacturerDescription` VARCHAR(191) NOT NULL,
    `ManuCity` VARCHAR(191) NOT NULL,
    `ManuGrade` VARCHAR(191) NOT NULL,
    `ManuCountry` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `productDescription` VARCHAR(191) NOT NULL,
    `productFeature` VARCHAR(191) NOT NULL,
    `productSize` VARCHAR(191) NOT NULL,
    `productUnit` INTEGER NOT NULL,
    `productInventoryLevel` INTEGER NOT NULL,
    `productUnitPrice` INTEGER NOT NULL,
    `productPriceCurrency` VARCHAR(191) NOT NULL,
    `productInventoryThreshold` INTEGER NOT NULL,
    `productImageUrl` VARCHAR(191) NOT NULL,
    `manuId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,
    `roleCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `emailId` VARCHAR(191) NOT NULL,
    `contactNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `User_emailId_key`(`emailId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_manuId_fkey` FOREIGN KEY (`manuId`) REFERENCES `Manufacturer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
