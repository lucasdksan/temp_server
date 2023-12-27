import { Request, Response } from "express";
import FormPaymentModel from "../models/formPaymentModel";
import { formPaymentViewMany } from "../views/formPaymentView";

export default class FormPaymentController {
    async create(req: Request, res: Response){
        try {
            const body = req.body;
            const formPaymentModel = new FormPaymentModel();

            const result = await formPaymentModel.architect(body);

            if(result) return res.json({ message: "Criado com sucesso!" }).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const formPaymentModel = new FormPaymentModel();

            const result = await formPaymentModel.rise();

            return res.json(formPaymentViewMany(result)).status(200);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}