import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";
import { constructionsZod } from "../zod/constructionsZod";

export default class ConstructionsModel {
    async creating(body: any) {
        if (!body) throw Error("Data invalit");

        const { user_id, ...data } = constructionsZod.parse(body);
        const modId = await modificationRecordSave(user_id);
        const construction = await prisma.constructions.create({
            data: {
                modification_record_id: modId,
                ...data
            }
        });

        if (!construction) return false;
        else return true;
    }
    
    async listing() {
        const list = await prisma.constructions.findMany({
            // include: {
            //     client: true,
            //     docsConstruction: true,
            //     employees: true,
            //     equipments: true,
            //     financial: true
            // }
        });

        if (!list) throw Error("Not list");

        return list;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const { user_id, ...data } = constructionsZod.parse(body);
        const modId = await modificationRecordSave(user_id);

        const construction = await prisma.constructions.update({
            where: { id },
            data: {
                modification_record_id: modId,
                ...data
            }
        });

        if(!construction) return false;
        else return true;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error in Construction search: Construction does not exist");

        const result = await prisma.constructions.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async indexing(id: any) {
        if (!id) throw Error("Error in Construction search: Construction does not exist");

        const construction = await prisma.constructions.findFirst({
            where: { id }
        });

        if (!construction) throw Error("Error in Construction search: Supplier does not exist");

        return construction;
    }
}