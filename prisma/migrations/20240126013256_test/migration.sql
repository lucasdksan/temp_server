/*
  Warnings:

  - Added the required column `last_change` to the `modificationRecord` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_modificationRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT,
    "last_change" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "modificationRecord_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_modificationRecord" ("created_at", "id", "update_at", "user_id") SELECT "created_at", "id", "update_at", "user_id" FROM "modificationRecord";
DROP TABLE "modificationRecord";
ALTER TABLE "new_modificationRecord" RENAME TO "modificationRecord";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
