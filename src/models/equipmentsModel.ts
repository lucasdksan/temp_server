import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";
import { equipmentsZod } from "../zod/equipmentsZod";

export default class EquipmentsModel {
    async creating(body: any){
        if (!body) throw new Error("Files not exist");

        const { user_id, employee_id, construction_id, ...data } = equipmentsZod.parse(body);
        const mod_id = await modificationRecordSave(user_id);

        const equipment = await prisma.equipments.create({
            data: {
                construction_id: construction_id ? construction_id : "",
                employee_id: employee_id ? employee_id : "",
                modification_record_id: mod_id,
                ...data
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
}