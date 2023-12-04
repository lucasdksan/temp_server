-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "position_in_construction" TEXT,
    "construction_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "employees_construction_id_fkey" FOREIGN KEY ("construction_id") REFERENCES "constructions" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "employees_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "employeesFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "employee_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "employeesFiles_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "employeesFiles_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "equipments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "type_equipment" TEXT NOT NULL,
    "construction_id" TEXT,
    "employee_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "equipments_construction_id_fkey" FOREIGN KEY ("construction_id") REFERENCES "constructions" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "equipments_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "equipments_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "imageEquipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "equipment_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "imageEquipment_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "equipments" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "imageEquipment_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "corporate_reason" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "suppliers_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "constructions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "total_value_work" TEXT NOT NULL,
    "amount_received" TEXT NOT NULL,
    "amount_spent" TEXT NOT NULL,
    "comments" TEXT,
    "client_id" TEXT,
    "modification_record_id" TEXT,
    "stats" INTEGER DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "constructions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "constructions_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "docsConstruction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "released_customer" BOOLEAN NOT NULL DEFAULT false,
    "construction_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "docsConstruction_construction_id_fkey" FOREIGN KEY ("construction_id") REFERENCES "constructions" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "docsConstruction_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clientAlert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "view" BOOLEAN DEFAULT false,
    "client_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "clientAlert_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "clientAlert_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clients" (
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
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "clients_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "docsClient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "released_customer" BOOLEAN NOT NULL DEFAULT false,
    "client_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "docsClient_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "docsClient_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "modificationRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "modificationRecord_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "master" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "token" TEXT NOT NULL DEFAULT '',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "possibleCustomers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "interested" TEXT NOT NULL,
    "fantasy_name" TEXT,
    "size_company" TEXT,
    "legal_nature" TEXT,
    "public_place" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cep" TEXT,
    "cpf_cnpj" TEXT NOT NULL,
    "tel" TEXT,
    "email" TEXT,
    "date_issue" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "deadline_expire" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL,
    "responsible_contact" TEXT,
    "contact_name" TEXT,
    "contact_situation" TEXT,
    "contact_date" TEXT,
    "contact_time" TEXT,
    "comments" TEXT,
    "opening" TEXT,
    "in_activity" TEXT,
    "type_company" TEXT,
    "status_company" TEXT,
    "date_situation" TEXT,
    "last_update" TEXT,
    "efr" TEXT,
    "reason_situation" TEXT,
    "special_situation" TEXT,
    "special_situation_date" TEXT,
    "share_capital" TEXT,
    "send_email" BOOLEAN NOT NULL DEFAULT false,
    "customer_feedback" BOOLEAN NOT NULL DEFAULT false,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "possibleCustomers_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "possibleCustomerMainActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "possible_customer_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "possibleCustomerMainActivity_possible_customer_id_fkey" FOREIGN KEY ("possible_customer_id") REFERENCES "possibleCustomers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "possibleCustomerQSA" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "qual" TEXT NOT NULL,
    "possible_customer_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "possibleCustomerQSA_possible_customer_id_fkey" FOREIGN KEY ("possible_customer_id") REFERENCES "possibleCustomers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "possibleCustomerTemporary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date_issue" TEXT NOT NULL,
    "comments" TEXT,
    "validity" TEXT NOT NULL,
    "deadline_expire" TEXT NOT NULL,
    "situation" BOOLEAN NOT NULL,
    "search_performed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "financial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "expense_classification" TEXT NOT NULL,
    "date_receipt" TEXT NOT NULL,
    "value_computed" TEXT NOT NULL,
    "nfe_nfce" TEXT NOT NULL,
    "payment_methods" TEXT NOT NULL,
    "comments" TEXT,
    "constructions_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "financial_constructions_id_fkey" FOREIGN KEY ("constructions_id") REFERENCES "constructions" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "financial_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "proofExpenseFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "financial_id" TEXT,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "proofExpenseFiles_financial_id_fkey" FOREIGN KEY ("financial_id") REFERENCES "financial" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "proofExpenseFiles_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sendEmail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sender" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "modification_record_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    CONSTRAINT "sendEmail_modification_record_id_fkey" FOREIGN KEY ("modification_record_id") REFERENCES "modificationRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refreshTokenAdmin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expiresIn" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "refreshTokenAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refreshTokenClient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expiresIn" INTEGER NOT NULL,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "refreshTokenClient_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "refreshTokenAdmin_user_id_key" ON "refreshTokenAdmin"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "refreshTokenClient_client_id_key" ON "refreshTokenClient"("client_id");
