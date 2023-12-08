import { Request, Response } from "express";
import ProspectingModel from "../models/prospectingModel";

export default class ProspectingController {
    async start(req: Request, res: Response){
        try {
            const prospectingModel = new ProspectingModel();
            const { errors, processedClients } = await prospectingModel.process();

            if(errors && errors.length > 0) {
                return res.json({ message: "prospecting completed! However, some data could not be saved", errors, processedClients }).status(200);
            }
            
            return res.json({ message: "prospecting completed!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async startUnique(req: Request, res: Response){
        try {
            const { cnpj } = req.query;
            const prospectingModel = new ProspectingModel();
            const result = await prospectingModel.processUnique(cnpj);
            
            return res.json(result).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}