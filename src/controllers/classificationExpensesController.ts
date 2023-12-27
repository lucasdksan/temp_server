import { Request, Response } from "express";
import ClassificationExpensesModel from "../models/classificationExpensesModel";
import { classificationExpensesViewMany } from "../views/classificationExpensesView";

export default class ClassificationExpensesController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const classificationExpensesModel = new ClassificationExpensesModel();

            const result = await classificationExpensesModel.architect(body);

            if(result) return res.json({ message: "Criado com sucesso!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const classificationExpensesModel = new ClassificationExpensesModel();

            const result = await classificationExpensesModel.rise();

            return res.json(classificationExpensesViewMany(result)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}