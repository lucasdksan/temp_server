import express from "express";
import ProspectingController from "./controllers/prospectingController";
import PossibleCustomersTemporaryController from "./controllers/possibleCustomersTemporaryController";
import PossibleCustomersController from "./controllers/possibleCustomersController";
import SearchController from "./controllers/searchController";
import FilterController from "./controllers/filterController";
import MailerController from "./controllers/mailerController";
import EmailReceivedController from "./controllers/emailReceivedController";

const routes = express.Router();
const prospectingController = new ProspectingController();
const possibleCustomersTemporaryController = new PossibleCustomersTemporaryController();
const possibleCustomersController = new PossibleCustomersController();
const searchController = new SearchController();
const filterController = new FilterController();
const mailerController = new MailerController();
const emailReceivedController = new EmailReceivedController();

routes.post("/possible_customers_temporary", possibleCustomersTemporaryController.create);
routes.post("/possible_customers", possibleCustomersController.create);
routes.post("/possible_customers/storeLargeData", possibleCustomersController.storeLargeData);
routes.post("/search", searchController.search);
routes.post("/filter", filterController.filter);
routes.post("/sendmailer-homepage", emailReceivedController.send);

routes.get("/prospecting", prospectingController.start);
routes.get("/possible_customers_temporary/list", possibleCustomersTemporaryController.list);
routes.get("/possible_customers/list", possibleCustomersController.list);
routes.get("/possible_customers", possibleCustomersController.index);
routes.get("/prospecting/unique", prospectingController.startUnique);
routes.get("/sendmailer", mailerController.send);

routes.put("/possible_customers/update", possibleCustomersController.update);

routes.delete("/possible_customers/delete", possibleCustomersController.delete);

export default routes;