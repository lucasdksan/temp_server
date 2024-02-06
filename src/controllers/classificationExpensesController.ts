import { Request, Response } from "express";
import ClassificationExpensesModel from "../models/classificationExpensesModel";
import { classificationExpensesViewMany } from "../views/classificationExpensesView";

export default class ClassificationExpensesController {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            const classificationExpensesModel = new ClassificationExpensesModel();
            const result = await classificationExpensesModel.creating(body);

            if (result) return res.json({ message: "Criado com sucesso!" }).status(200);
            else return res.json({ error: "Error in create" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const classificationExpensesModel = new ClassificationExpensesModel();
            const result = await classificationExpensesModel.listing();

            return res.json(classificationExpensesViewMany(result)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const classificationExpensesModel = new ClassificationExpensesModel();
            const result = await classificationExpensesModel.excluding(id);

            if(result) return res.json({ message: "ClassificationExpenses Deleting" }).status(200);
            else return res.json({ message: "Error in ClassificationExpenses Excluding" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const classificationExpensesModel = new ClassificationExpensesModel();
            const result = await classificationExpensesModel.updating(id, body);

            if(result) return res.json({ message: "Classification expenses updated" }).status(200);
            else return res.json({ error: "Not updated Classification expenses" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}