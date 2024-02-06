import { prisma } from "../prisma";
import { adminZod } from "../zod/adminZod";

export default class AdminModel {
    async creating(body: any) {
        if (!body) throw Error("Data invalit");

        const data = adminZod.parse(body);
        
        const admin = await prisma.users.create({
            data
        });

        if (!admin) return false;
        else return true;
    }
    
    async listing() {
        const list = await prisma.users.findMany();

        if(!list) throw Error("Error List");

        return list;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const { password, ...data } = adminZod.parse(body);
        
        const admin = await prisma.users.update({
            where: { id },
            data
        });
        
        if (!admin) return false;
        else return true;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error in Admin search: Admin does not exist");

        const result = await prisma.users.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async indexing(id: any) {
        if (!id) throw Error("Error in admin search: admin does not exist");

        const admin = await prisma.users.findFirst({
            where: { id }
        });

        if (!admin) throw Error("Error in admin search: Admin does not exist");
        return admin;
    }
}