-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "passwordResetToken" TEXT,
    "passwordResetExpires" DATETIME,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "clients_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_clients" ("cep", "city", "corporate_reason", "cpf_cnpj", "created_at", "email", "id", "modification_record_id", "name", "neighborhood", "number", "password", "passwordResetExpires", "passwordResetToken", "secondary_email", "secondary_tel", "street", "tel", "uf", "update_at") SELECT "cep", "city", "corporate_reason", "cpf_cnpj", "created_at", "email", "id", "modification_record_id", "name", "neighborhood", "number", "password", "passwordResetExpires", "passwordResetToken", "secondary_email", "secondary_tel", "street", "tel", "uf", "update_at" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "master" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "token" TEXT NOT NULL DEFAULT '',
    "passwordResetToken" TEXT,
    "passwordResetExpires" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("created_at", "email", "id", "master", "name", "password", "passwordResetExpires", "passwordResetToken", "tel", "token", "update_at") SELECT "created_at", "email", "id", "master", "name", "password", "passwordResetExpires", "passwordResetToken", "tel", "token", "update_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
