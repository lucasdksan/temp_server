import { Request, Response } from "express";

import FinancialModel from "../models/financialModel";
import { financialViewMany } from "../views/financialView";

export default class FinancialController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const financialModel = new FinancialModel();
            const result = await financialModel.creating(body);

            if (result) return res.json({ message: "Deu certo" }).status(200);
            else return res.json({ error: "Error in create" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const financialModel = new FinancialModel();
            const list = await financialModel.listing();

            return res.json(financialViewMany(list)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const { year } = req.query;
            const financialModel = new FinancialModel();
            const list = await financialModel.indexing(year as string);

            return res.json(financialViewMany(list)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const financialModel = new FinancialModel();
            const result = await financialModel.updating(id, body);

            if(result) return res.json({ message: "Feito com sucesso!" }).status(200);
            else return res.json({ error: "Error in remove" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const financialModel = new FinancialModel();
            const result = await financialModel.excluding(id);

            if(result) return res.json({ message: "Feito com sucesso!" }).status(200);
            else return res.json({ error: "Error in remove" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}