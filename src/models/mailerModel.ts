import { mailerProspectingTemplate } from './../email/mailerProspectingTemplate';
import { nodemailerConfig } from './../email/mailerConfig';
import nodemailer from "nodemailer";
import { prisma } from '../prisma';

export default class MailerModel {
    async sending(id: any) {
        if(!id) throw Error("Error in Possible Customers search: Possible Customers does not exist");
        
        const transport = nodemailer.createTransport(nodemailerConfig);
        const client = await prisma.possibleCustomers.findFirst({
            where: {
                id: id
            },
            include: {
                possible_customer_main_activity: true,
                possible_customer_QSA: true
            }
        });

        if(!client) throw Error("Client not Exist!");
        if(!client.email) throw Error("Client Email not exist!");

        const { contact_name, interested, city, uf, type, possible_customer_QSA } = client;
        const auxName: string[] = [];

        if(Array.isArray(possible_customer_QSA) && possible_customer_QSA.length > 0){
            possible_customer_QSA.forEach((qsa, index)=> {
                if(qsa.name) {
                    auxName.push(qsa.name);
                }
            });
        }

        const resultSendEmail = await transport.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: client.email,
            subject: "Apresentação",
            html: mailerProspectingTemplate(contact_name ? contact_name: auxName[0], city, uf, interested, type),
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

    async listing(){
        const listMailer = await prisma.sendEmail.findMany();

        if(!listMailer) throw Error("Error in get List");

        return listMailer;
    }
}