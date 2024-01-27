import { comparePassword, crypt } from "../libs/bycript";
import { tokenGenerate } from "../libs/tokenGenerate";
import { prisma } from "../prisma";
import { auth_zod } from "../zod/auth_zod";
import { authenticate_zod } from "../zod/authenticate_zod";

export default class AuthModel {
    async creating(body: any){
        if (!body) throw Error("Data error !");

        const { email, name, password, tel, master } = auth_zod.parse(body);

        const existAdmin = await prisma.users.findMany({
            where: { 
                OR: [ { name }, { email } ]
            }
        });

        if(existAdmin.length !== 0) throw Error("Admin Exist!");

        const adminRegister = await prisma.users.create({
            data: {
                email,
                name,
                password: crypt(password),
                tel,
                master: master ? master : false,
            }
        });

        if(!adminRegister) return false;
        else return true;
    }

    async authenticating(body: any){
        if (!body) throw Error("Data error !");

        const { email, password } = authenticate_zod.parse(body);
        const findAdmin = await prisma.users.findFirst({
            where: { email }
        });

        if(!findAdmin) throw Error("Admin not find!");

        const resultCompare = await comparePassword(password, findAdmin.password);

        if(!resultCompare) throw Error("Invalid password!");

        return {
            findAdmin,
            token: tokenGenerate(findAdmin.id)
        }
    }

    async checking(id: any){
        if(!id || id === "") throw Error("Token Invalid");

        const admin = await prisma.users.findFirst({
            where: { id }
        });

        if(!admin) throw Error("Admin Not exist");

        return admin;
    }
}