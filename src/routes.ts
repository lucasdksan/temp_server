import express from "express";

import ProspectingController from "./controllers/prospectingController";
import PossibleCustomersTemporaryController from "./controllers/possibleCustomersTemporaryController";
import PossibleCustomersController from "./controllers/possibleCustomersController";
import SearchController from "./controllers/searchController";
import FilterController from "./controllers/filterController";
import MailerController from "./controllers/mailerController";
import EmailReceivedController from "./controllers/emailReceivedController";
import FinancialController from "./controllers/financialController";
import FormPaymentController from "./controllers/formPaymentController";
import ClassificationExpensesController from "./controllers/classificationExpensesController";
import DescriptionWorkServiceController from "./controllers/descriptionWorkServiceController";
import AuthController from "./controllers/authController";
import authMiddleware from "./middlewares/auth";
import ModificationRecordController from "./controllers/modificationRecordController";
import SupplierController from "./controllers/supplierController";

const routes = express.Router();

const prospectingController = new ProspectingController();
const possibleCustomersTemporaryController = new PossibleCustomersTemporaryController();
const possibleCustomersController = new PossibleCustomersController();
const searchController = new SearchController();
const filterController = new FilterController();
const mailerController = new MailerController();
const emailReceivedController = new EmailReceivedController();
const financialController = new FinancialController();
const formPaymentController = new FormPaymentController();
const classificationExpensesController = new ClassificationExpensesController();
const descriptionWorkServiceController = new DescriptionWorkServiceController();
const authController = new AuthController();
const modificationRecordController = new ModificationRecordController();
const supplierController = new SupplierController();

routes.post("/possible_customers_temporary", authMiddleware, possibleCustomersTemporaryController.create);
routes.post("/possible_customers_temporary_unique", authMiddleware, possibleCustomersTemporaryController.createIndex);
routes.post("/possible_customers", authMiddleware, possibleCustomersController.create);
routes.post("/possible_customers/storeLargeData", authMiddleware, possibleCustomersController.store);
routes.post("/search", authMiddleware, searchController.search);
routes.post("/filter", authMiddleware, filterController.filter);
routes.post("/sendmailer_homepage", emailReceivedController.send);
routes.post("/form_payment", authMiddleware, formPaymentController.create);
routes.post("/classification_expenses", authMiddleware, classificationExpensesController.create);
routes.post("/description_work_service", authMiddleware, descriptionWorkServiceController.create);
routes.post("/financial/uploads", authMiddleware, financialController.create);
routes.post("/admin/sign_in", authController.authenticate);
routes.post("/admin/register", authController.create);
routes.post("/supplier/create", authMiddleware, supplierController.create);


routes.get("/prospecting", authMiddleware, prospectingController.start);
routes.get("/possible_customers_temporary/list", authMiddleware, possibleCustomersTemporaryController.list);
routes.get("/possible_customers/list", authMiddleware, possibleCustomersController.list);
routes.get("/possible_customers", authMiddleware, possibleCustomersController.index);
routes.get("/prospecting/unique", authMiddleware, prospectingController.work);
routes.get("/sendmailer", authMiddleware, mailerController.send);
routes.get("/financial/list", authMiddleware, financialController.list);
routes.get("/form_payment/list", authMiddleware, formPaymentController.list);
routes.get("/classification_expenses/list", authMiddleware, classificationExpensesController.list);
routes.get("/description_work_service/list", authMiddleware, descriptionWorkServiceController.list);
routes.get("/financial/get_year", authMiddleware, financialController.index);
routes.get("/admin/token-validate", authMiddleware, authController.verify);
routes.get("/modification_record/list", authMiddleware, modificationRecordController.list);
routes.get("/send_mailer/list", authMiddleware, mailerController.list);
routes.get("/supplier/list", authMiddleware, supplierController.list);
routes.get("/supplier", authMiddleware, supplierController.index);

routes.put("/possible_customers/update", authMiddleware, possibleCustomersController.update);
routes.put("/supplier/update", authMiddleware, supplierController.update);

routes.delete("/possible_customers/delete", authMiddleware, possibleCustomersController.delete);
routes.delete("/supplier/delete", authMiddleware, supplierController.delete);

export default routes;