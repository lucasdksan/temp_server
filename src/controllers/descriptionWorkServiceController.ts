import { Request, Response } from "express";
import DescriptionWorkServiceModel from "../models/descriptionWorkServiceModel";
import { descriptionWorkServiceViewMany } from "../views/descriptionWorkServiceView";

export default class DescriptionWorkServiceController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const descriptionWorkServiceModel = new DescriptionWorkServiceModel();

            const result = await descriptionWorkServiceModel.architect(body);

            if(result) return res.json({ message: "Criado com sucesso!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const descriptionWorkServiceModel = new DescriptionWorkServiceModel();

            const result = await descriptionWorkServiceModel.rise();

            return res.json(descriptionWorkServiceViewMany(result)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}