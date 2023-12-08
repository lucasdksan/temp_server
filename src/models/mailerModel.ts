import { mailerProspectingTemplate } from './../email/mailerProspectingTemplate';
import { nodemailerConfig } from './../email/mailerConfig';
import nodemailer from "nodemailer";
import { prisma } from '../prisma';

export default class MailerModel {
    async generate(id: any) {
        if(!id) throw Error("Error in Possible Customers search: Possible Customers does not exist");
        const transport = nodemailer.createTransport(nodemailerConfig);
        const client = await prisma.possibleCustomers.findFirst({
            where: {
                id: id
            }
        });

        if(!client) throw Error("Client not Exist!");
        if(!client.email) throw Error("Client Email not exist!");

        const resultSendEmail = await transport.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: client.email,
            subject: "Apresentação",
            html: mailerProspectingTemplate(client.contact_name ? client.contact_name : client.interested),
        });

        if(!resultSendEmail) throw Error("Fail Send Email");

        await prisma.sendEmail.create({
            data: {
                recipient: client.contact_name ? client.contact_name : client.interested,
                sender: process.env.NODEMAILER_EMAIL as string,
                theme: "Apresentação"
            }
        });

        await prisma.possibleCustomers.update({
            where: {
                id: id
            },
            data: {
                send_email: true
            }
        });

        return true;
    }
}