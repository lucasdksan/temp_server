import { Request, Response } from "express";
import PossibleCustomersTemporaryModel from "../models/possibleCustomersTemporaryModel";
import { possibleCustomersTemporaryViewMany } from "../views/possibleCustomersTemporaryView";

export default class PossibleCustomersTemporaryController{
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const possibleCustomersTemporaryModel = new PossibleCustomersTemporaryModel();
            
            const { notSaved, saved } = await possibleCustomersTemporaryModel.process(body);

            if(notSaved && notSaved.length > 0) {
                return res.json({ message: "prospecting completed! However, some data could not be saved", notSaved, saved:possibleCustomersTemporaryViewMany(saved) }).status(200);
            }

            return res.json({ message: "prospecting completed!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async list(req: Request, res: Response){
        try {
            const possibleCustomersTemporaryModel = new PossibleCustomersTemporaryModel();
            const list = await possibleCustomersTemporaryModel.list();

            return res.json(possibleCustomersTemporaryViewMany(list)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}