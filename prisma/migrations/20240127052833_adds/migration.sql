/*
  Warnings:

  - You are about to drop the `refreshTokenAdmin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refreshTokenClient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `passwordResetExpires` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetToken` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetExpires` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetToken` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "refreshTokenAdmin_user_id_key";

-- DropIndex
DROP INDEX "refreshTokenClient_client_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "refreshTokenAdmin";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "refreshTokenClient";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "master" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "token" TEXT NOT NULL DEFAULT '',
    "passwordResetToken" TEXT NOT NULL,
    "passwordResetExpires" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("created_at", "email", "id", "master", "name", "password", "tel", "token", "update_at") SELECT "created_at", "email", "id", "master", "name", "password", "tel", "token", "update_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "corporate_reason" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "secondary_tel" TEXT,
    "cpf_cnpj" TEXT NOT NULL,
    "secondary_email" TEXT,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "passwordResetToken" TEXT NOT NULL,
    "passwordResetExpires" DATETIME NOT NULL,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "clients_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_clients" ("cep", "city", "corporate_reason", "cpf_cnpj", "created_at", "email", "id", "modification_record_id", "name", "neighborhood", "number", "password", "secondary_email", "secondary_tel", "street", "tel", "uf", "update_at") SELECT "cep", "city", "corporate_reason", "cpf_cnpj", "created_at", "email", "id", "modification_record_id", "name", "neighborhood", "number", "password", "secondary_email", "secondary_tel", "street", "tel", "uf", "update_at" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
