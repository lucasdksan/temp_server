import nodemailer from "nodemailer";
import { nodemailerConfig } from "../email/mailerConfig";
import { mailerSingle } from "../email/mailerSingle";

export default class EmailReceivedModel {
    async sending(body: any){
        if(!body) throw Error("Dados Invalidos");

        const { email, name, textContent } = body;

        if(!email || !name || !textContent) throw Error("Dados Invalidos");

        const transport = nodemailer.createTransport(nodemailerConfig);
        const resultSendEmail = await transport.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_EMAIL,
            subject: "Contato Home Page",
            html: mailerSingle(textContent, name, email),
        });

        if(!resultSendEmail) throw Error("Fail Send Email");

        return resultSendEmail;
    }
}