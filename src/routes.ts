import express from "express";
import ProspectingController from "./controllers/prospectingController";

const routes = express.Router();
const prospectingController = new ProspectingController();

routes.post("/prospecting", prospectingController.start);

export default routes;