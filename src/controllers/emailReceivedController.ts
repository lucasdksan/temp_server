import { Request, Response } from "express";
import EmailReceivedModel from "../models/emailReceivedModel";

export default class EmailReceivedController {
    async send(req: Request, res: Response) {
        try {
            const body = req.body;
            const emailReceivedModel = new EmailReceivedModel();
            const result = await emailReceivedModel.sending(body);

            if(result) return res.json({ message: "Email Enviado!" }).status(200);

            else return res.json({ message: "Falha ao enviar!" }).status(500);
        } catch (error) {
            return res.status(500).json({ error: error || "Internal Server Error" });
        }
    }
}