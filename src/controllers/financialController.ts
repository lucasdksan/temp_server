import { Request, Response } from "express";
import FinancialModel from "../models/financialModel";
import { financialViewMany } from "../views/financialView";

export default class FinancialController{
    async upload(req: Request, res: Response){
        try {
            const body = req.body;
            const file = req.file;
            const financialModel = new FinancialModel();

            await financialModel.create(body, file);

            return res.json({ message: "Deu certo" }).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }

    async list(req: Request, res: Response){
        try {
            const financialModel = new FinancialModel();
            const list = await financialModel.list();

            return res.json(financialViewMany(list)).status(200);
        } catch (error) {
            return res.json(error).status(500);
        }
    }
}