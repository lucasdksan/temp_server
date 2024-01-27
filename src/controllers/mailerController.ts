import { Request, Response } from "express";
import MailerModel from "../models/mailerModel";
import { mailerViewMany } from "../views/mailerView";

export default class MailerController {
    async send(req: Request, res: Response){
        try {
            const { id } = req.query;
            const mailerModel = new MailerModel();
            const result = await mailerModel.sending(id);

            if(result) return res.json({ message: "Email Enviado!", status: true }).status(200);

            return res.json({ message: "Falha ao enviar!", status: false }).status(500);
        } catch (error) {
            return res.json({ error, status: false }).status(500);
        }
    }

    async list(req: Request, res: Response){
        try {
            const mailerModel = new MailerModel();
            const list = await mailerModel.listing();

            return res.json(mailerViewMany(list)).status(200);
        } catch (error) {
            return res.json({ error, status: false }).status(500);
        }
    }
}