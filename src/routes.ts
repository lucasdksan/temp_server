import express from "express";
import multer from "multer";

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

const storageFinancial = multer.memoryStorage();
const uploadsFinancial = multer({ storage: storageFinancial });

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

routes.post("/possible_customers_temporary", possibleCustomersTemporaryController.create);
routes.post("/possible_customers", possibleCustomersController.create);
routes.post("/possible_customers/storeLargeData", possibleCustomersController.storeLargeData);
routes.post("/search", searchController.search);
routes.post("/filter", filterController.filter);
routes.post("/sendmailer_homepage", emailReceivedController.send);
routes.post("/form_payment", formPaymentController.create);
routes.post("/classification_expenses", classificationExpensesController.create);
routes.post("/description_work_service", descriptionWorkServiceController.create);
routes.post("/financial/uploads", uploadsFinancial.single("file"), financialController.upload);

routes.get("/prospecting", prospectingController.start);
routes.get("/possible_customers_temporary/list", possibleCustomersTemporaryController.list);
routes.get("/possible_customers/list", possibleCustomersController.list);
routes.get("/possible_customers", possibleCustomersController.index);
routes.get("/prospecting/unique", prospectingController.startUnique);
routes.get("/sendmailer", mailerController.send);
routes.get("/financial/list", financialController.list);
routes.get("/form_payment/list", formPaymentController.list);
routes.get("/classification_expenses/list", classificationExpensesController.list);
routes.get("/description_work_service/list", descriptionWorkServiceController.list);

routes.put("/possible_customers/update", possibleCustomersController.update);

routes.delete("/possible_customers/delete", possibleCustomersController.delete);

export default routes;