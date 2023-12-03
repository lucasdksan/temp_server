import { Request, Response } from "express";
import ProspectingModel from "../models/prospectingModel";

export default class ProspectingController {
    async start(req: Request, res: Response){
        try {
            const { cnpj } = req.body;
            const prospectingModel = new ProspectingModel();
            const client_data = await prospectingModel.process(cnpj);

            return res.json(client_data);
        } catch (error) {
            throw Error(`Error: ${error}`);
        }
    }
}