import { Request, Response } from "express";
import ProspectingModel from "../models/prospectingModel";

export default class ProspectingController {
    async start(req: Request, res: Response){
        try {
            const prospectingModel = new ProspectingModel();
            const { errors, processedClients } = await prospectingModel.starting();

            if(errors && errors.length > 0) {
                return res.json({ message: "prospecting completed! However, some data could not be saved", errors, processedClients }).status(200);
            }
            
            return res.json({ message: "prospecting completed!" }).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async work(req: Request, res: Response){
        try {
            const { cnpj } = req.query;
            const prospectingModel = new ProspectingModel();
            const result = await prospectingModel.working(cnpj);
            
            return res.json(result).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}