-- CreateTable
CREATE TABLE `employees` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `position_in_construction` VARCHAR(191) NULL,
    `construction_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employeesFiles` (
    `id` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `employee_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipments` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `responsible` VARCHAR(191) NOT NULL,
    `type_equipment` VARCHAR(191) NOT NULL,
    `construction_id` VARCHAR(191) NULL,
    `employee_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imageEquipment` (
    `id` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `equipment_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suppliers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `corporate_reason` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `constructions` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NULL,
    `longitude` VARCHAR(191) NULL,
    `start_date` VARCHAR(191) NOT NULL,
    `end_date` VARCHAR(191) NOT NULL,
    `total_value_work` VARCHAR(191) NOT NULL,
    `amount_received` VARCHAR(191) NOT NULL,
    `amount_spent` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `client_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `stats` INTEGER NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `docsConstruction` (
    `id` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `released_customer` BOOLEAN NOT NULL DEFAULT false,
    `construction_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientAlert` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `view` BOOLEAN NULL DEFAULT false,
    `client_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `corporate_reason` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `secondary_tel` VARCHAR(191) NULL,
    `cpf_cnpj` VARCHAR(191) NOT NULL,
    `secondary_email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `docsClient` (
    `id` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `released_customer` BOOLEAN NOT NULL DEFAULT false,
    `client_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modificationRecord` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `master` BOOLEAN NOT NULL DEFAULT false,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `possibleCustomers` (
    `id` VARCHAR(191) NOT NULL,
    `interested` VARCHAR(191) NOT NULL,
    `fantasy_name` VARCHAR(191) NULL,
    `size_company` VARCHAR(191) NULL,
    `legal_nature` VARCHAR(191) NULL,
    `public_place` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NULL,
    `cpf_cnpj` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `date_issue` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `validity` VARCHAR(191) NOT NULL,
    `situation` BOOLEAN NOT NULL,
    `responsible_contact` VARCHAR(191) NULL,
    `contact_name` VARCHAR(191) NULL,
    `contact_situation` VARCHAR(191) NULL,
    `contact_date` VARCHAR(191) NULL,
    `contact_time` VARCHAR(191) NULL,
    `comments` VARCHAR(191) NULL,
    `opening` VARCHAR(191) NULL,
    `in_activity` VARCHAR(191) NULL,
    `type_company` VARCHAR(191) NULL,
    `status_company` VARCHAR(191) NULL,
    `date_situation` VARCHAR(191) NULL,
    `last_update` VARCHAR(191) NULL,
    `efr` VARCHAR(191) NULL,
    `reason_situation` VARCHAR(191) NULL,
    `special_situation` VARCHAR(191) NULL,
    `special_situation_date` VARCHAR(191) NULL,
    `share_capital` VARCHAR(191) NULL,
    `send_email` BOOLEAN NOT NULL DEFAULT false,
    `customer_feedback` BOOLEAN NOT NULL DEFAULT false,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `possibleCustomerMainActivity` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `possible_customer_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `possibleCustomerQSA` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `qual` VARCHAR(191) NOT NULL,
    `possible_customer_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `possibleCustomerTemporary` (
    `id` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `date_issue` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `validity` VARCHAR(191) NOT NULL,
    `situation` BOOLEAN NOT NULL,
    `search_performed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `financial` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `description_the_main` VARCHAR(191) NOT NULL,
    `expense_classification` VARCHAR(191) NOT NULL,
    `date_receipt` VARCHAR(191) NOT NULL,
    `value_computed` VARCHAR(191) NOT NULL,
    `nfe_nfce` VARCHAR(191) NOT NULL,
    `payment_methods` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `constructions_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proofExpenseFiles` (
    `id` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `financial_id` VARCHAR(191) NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sendEmail` (
    `id` VARCHAR(191) NOT NULL,
    `sender` VARCHAR(191) NOT NULL,
    `recipient` VARCHAR(191) NOT NULL,
    `theme` VARCHAR(191) NOT NULL,
    `modification_record_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refreshTokenAdmin` (
    `id` VARCHAR(191) NOT NULL,
    `expiresIn` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `refreshTokenAdmin_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refreshTokenClient` (
    `id` VARCHAR(191) NOT NULL,
    `expiresIn` INTEGER NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `refreshTokenClient_client_id_key`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formPayment` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classificationExpenses` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `descriptionWorkService` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_construction_id_fkey` FOREIGN KEY (`construction_id`) REFERENCES `constructions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employeesFiles` ADD CONSTRAINT `employeesFiles_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employeesFiles` ADD CONSTRAINT `employeesFiles_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `equipments` ADD CONSTRAINT `equipments_construction_id_fkey` FOREIGN KEY (`construction_id`) REFERENCES `constructions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `equipments` ADD CONSTRAINT `equipments_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `equipments` ADD CONSTRAINT `equipments_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imageEquipment` ADD CONSTRAINT `imageEquipment_equipment_id_fkey` FOREIGN KEY (`equipment_id`) REFERENCES `equipments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imageEquipment` ADD CONSTRAINT `imageEquipment_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `suppliers` ADD CONSTRAINT `suppliers_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `constructions` ADD CONSTRAINT `constructions_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `constructions` ADD CONSTRAINT `constructions_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `docsConstruction` ADD CONSTRAINT `docsConstruction_construction_id_fkey` FOREIGN KEY (`construction_id`) REFERENCES `constructions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `docsConstruction` ADD CONSTRAINT `docsConstruction_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientAlert` ADD CONSTRAINT `clientAlert_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientAlert` ADD CONSTRAINT `clientAlert_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `docsClient` ADD CONSTRAINT `docsClient_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `docsClient` ADD CONSTRAINT `docsClient_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modificationRecord` ADD CONSTRAINT `modificationRecord_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `possibleCustomers` ADD CONSTRAINT `possibleCustomers_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `possibleCustomerMainActivity` ADD CONSTRAINT `possibleCustomerMainActivity_possible_customer_id_fkey` FOREIGN KEY (`possible_customer_id`) REFERENCES `possibleCustomers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `possibleCustomerQSA` ADD CONSTRAINT `possibleCustomerQSA_possible_customer_id_fkey` FOREIGN KEY (`possible_customer_id`) REFERENCES `possibleCustomers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `financial` ADD CONSTRAINT `financial_constructions_id_fkey` FOREIGN KEY (`constructions_id`) REFERENCES `constructions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `financial` ADD CONSTRAINT `financial_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proofExpenseFiles` ADD CONSTRAINT `proofExpenseFiles_financial_id_fkey` FOREIGN KEY (`financial_id`) REFERENCES `financial`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proofExpenseFiles` ADD CONSTRAINT `proofExpenseFiles_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sendEmail` ADD CONSTRAINT `sendEmail_modification_record_id_fkey` FOREIGN KEY (`modification_record_id`) REFERENCES `modificationRecord`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refreshTokenAdmin` ADD CONSTRAINT `refreshTokenAdmin_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refreshTokenClient` ADD CONSTRAINT `refreshTokenClient_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
