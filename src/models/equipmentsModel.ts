import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";
import { equipmentsZod } from "../zod/equipmentsZod";

export default class EquipmentsModel {
    async creating(body: any){
        if (!body) throw new Error("Files not exist");

        const { user_id, employee_id, construction_id, name, responsible, type_equipment } = equipmentsZod.parse(body);
        const mod_id = await modificationRecordSave(user_id);
        const equipment = await prisma.equipments.create({
            data: {
                name,
                responsible,
                type_equipment,
                construction_id,
                employee_id,
                modification_record_id: mod_id,

            }
        });

        if(!equipment) return false;
        else return true;
    }

    async listing() {
        const list = await prisma.equipments.findMany();

        if(!list) throw Error("Not list");

        return list;
    }

    async indexing(id: any){
        if (!id || id === "") throw Error("Not exist");

        const equipment = await prisma.equipments.findFirst({
            where: {
                id
            },
            include: {
                construction: true,
                employee: true,
                imageEquipment: true
            }
        });

        if(!equipment) throw Error("Not exist");

        return equipment;
    }

    async excluding(id: any){
        if (!id || id === "") throw Error("Not exist");

        const result = await prisma.equipments.delete({ where: { id } });

        if(!result) return false;

        else return true;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const { user_id, ...data } = body;
        const mod_id = await modificationRecordSave(user_id);

        const equipment = await prisma.equipments.update({
            where: { id },
            data: {
                modification_record_id: mod_id,
                ...data
            }
        });

        if(!equipment) return false;
        else return true;
    }
}