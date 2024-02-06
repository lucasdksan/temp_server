import { Request, Response } from "express";
import FormPaymentModel from "../models/formPaymentModel";
import { formPaymentViewMany } from "../views/formPaymentView";

export default class FormPaymentController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const formPaymentModel = new FormPaymentModel();
            const result = await formPaymentModel.creating(body);

            if(result) return res.json({ message: "Criado com sucesso!" }).status(200);
            else return res.json({ error: "Error in create"}).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const formPaymentModel = new FormPaymentModel();
            const result = await formPaymentModel.listing();

            return res.json(formPaymentViewMany(result)).status(200);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const formPaymentModel = new FormPaymentModel();
            const result = await formPaymentModel.excluding(id);

            if(result) return res.json({ message: "Feito com sucesso!" }).status(200);
            else return res.json({ error: "Error in remove" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const body = req.body;
            const formPaymentModel = new FormPaymentModel();
            const result = await formPaymentModel.updating(id, body);

            if(result) return res.json({ message: "Modificação feita com sucesso!" }).status(200);
            else return res.json({ error: "Error in update" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}