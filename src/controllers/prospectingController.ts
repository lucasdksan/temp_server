import { Request, Response } from "express";
import ProspectingModel from "../models/prospectingModel";

export default class ProspectingController {
    async start(req: Request, res: Response){
        try {
            const prospectingModel = new ProspectingModel();
            await prospectingModel.process();

            return res.json({ message: "prospecting completed!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}