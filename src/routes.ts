import express from "express";
import ProspectingController from "./controllers/prospectingController";
import PossibleCustomersTemporaryController from "./controllers/possibleCustomersTemporaryController";
import PossibleCustomersController from "./controllers/possibleCustomersController";
import SearchController from "./controllers/searchController";

const routes = express.Router();
const prospectingController = new ProspectingController();
const possibleCustomersTemporaryController = new PossibleCustomersTemporaryController();
const possibleCustomersController = new PossibleCustomersController();
const searchController = new SearchController();

routes.post("/possible_customers_temporary", possibleCustomersTemporaryController.create);
routes.post("/possible_customers", possibleCustomersController.create);
routes.post("/search", searchController.search);

routes.get("/prospecting", prospectingController.start);
routes.get("/possible_customers_temporary/list", possibleCustomersTemporaryController.list);
routes.get("/possible_customers/list", possibleCustomersController.list);
routes.get("/possible_customers", possibleCustomersController.index);

routes.put("/possible_customers/update", possibleCustomersController.update);

routes.delete("/possible_customers/delete", possibleCustomersController.delete);

export default routes;