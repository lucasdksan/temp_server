import crypto from "crypto";
import nodemailer from "nodemailer";

import { comparePassword, crypt } from "../libs/bycript";
import { tokenGenerate } from "../libs/tokenGenerate";

import { prisma } from "../prisma";

import { auth_zod } from "../zod/auth_zod";
import { authenticate_zod } from "../zod/authenticate_zod";
import { nodemailerConfig } from "../email/mailerConfig";

export default class AuthModel {
    async creating(body: any) {
        if (!body) throw Error("Data error !");

        const { email, name, password, tel, master } = auth_zod.parse(body);

        const existAdmin = await prisma.users.findMany({
            where: {
                OR: [{ name }, { email }]
            }
        });

        if (existAdmin.length !== 0) throw Error("Admin Exist!");

        const adminRegister = await prisma.users.create({
            data: {
                email,
                name,
                password: crypt(password),
                tel,
                master: master ? master : false,
            }
        });

        if (!adminRegister) return false;
        else return true;
    }

    async authenticating(body: any) {
        if (!body) throw Error("Data error !");

        const { email, password } = authenticate_zod.parse(body);
        const findAdmin = await prisma.users.findFirst({
            where: { email }
        });

        if (!findAdmin) throw Error("Admin not find!");

        const resultCompare = await comparePassword(password, findAdmin.password);

        if (!resultCompare) throw Error("Invalid password!");

        return {
            findAdmin,
            token: tokenGenerate(findAdmin.id)
        }
    }

    async checking(id: any) {
        if (!id || id === "") throw Error("Token Invalid");

        const admin = await prisma.users.findFirst({
            where: { id }
        });

        if (!admin) throw Error("Admin Not exist");

        return admin;
    }

    async forgoting(email: any) {
        if (!email && typeof email !== "string") throw Error("Data error !");

        const transport = nodemailer.createTransport(nodemailerConfig);
        const now = new Date();
        const token = crypto.randomBytes(20).toString("hex");

        now.setHours(now.getHours() + 1);

        const admin = await prisma.users.findFirst({
            where: { email }
        });

        if (!admin) throw Error("Admin not exist");

        const resultUpdate = await prisma.users.update({
            where: {
                id: admin.id
            },
            data: {
                passwordResetExpires: now,
                passwordResetToken: token
            }
        });

        if (!resultUpdate) throw Error("Admin not exist");

        const resultSendEmail = await transport.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: email,
            subject: "Token para alterar senha",
            html: `Utilize esse token para modificar sua senha ${token}`
        });

        if (!resultSendEmail) return false;
        else return true;
    }

    async redefining(email: any, password: string, token: any) {
        if (!email) throw Error("Data error !");
        if (!password) throw Error("Data error !");
        if (!token) throw Error("Data error !");

        const now = new Date();

        const admin = await prisma.users.findFirst({
            where: { email }
        });

        if (admin?.passwordResetToken == token) throw Error("Token invalid");
        if (!admin?.passwordResetExpires) throw Error("Token expired, generate a new one");
        if (now > admin.passwordResetExpires) throw Error("Token expired, generate a new one");

        const adminUpdate = await prisma.users.update({
            where: { id: admin.id },
            data: {
                password: crypt(password),
                passwordResetToken: ""
            }
        });

        if (!adminUpdate) return false;
        else return true;
    }
}