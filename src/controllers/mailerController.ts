import { Request, Response } from "express";
import MailerModel from "../models/mailerModel";

export default class MailerController {
    async send(req: Request, res: Response){
        try {
            const { id } = req.query;
            const mailerModel = new MailerModel()
            const result = await mailerModel.generate(id);

            if(result) return res.json({ message: "Email Enviado!" }).status(200);

            return res.json({ message: "Falha ao enviar!" }).status(500);
        } catch (error) {
            return res.json({ error }).status(500);
        }
    }
}