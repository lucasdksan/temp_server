import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";
import { employeesZod } from "../zod/employeesZod";

export default class EmployeesModel {
    async creating(body: any) {
        if (!body) throw new Error("Files not exist");

        const { user_id, construction_id, ...data } = employeesZod.parse(body);
        const mod_id = await modificationRecordSave(user_id);

        const employee = await prisma.employees.create({
            data: {
                modification_record_id: mod_id,
                construction_id: construction_id ? construction_id : null,
                ...data
            }
        });

        if (!employee) return false;
        else return true;
    }

    async listing() {
        const list = await prisma.employees.findMany();

        if (!list) throw Error("Not list");

        return list;
    }

    async listingData(id: any) {
        if (!id || id === "") throw Error("Not exist");

        const list = await prisma.employees.findMany({
            where: { id },
            include: {
                equipments: true,
                construction: true,
                employeeFiles: true
            }
        });

        if (!list) throw Error("Not list");

        return list;
    }

    async indexing(id: any) {
        if (!id || id === "") throw Error("Not exist");

        const employee = await prisma.employees.findFirst({
            where: { id }
        });

        if (!employee) throw Error("Not exist");

        return employee;
    }

    async excluding(id: any) {
        if (!id || id === "") throw Error("Not exist");

        const result = await prisma.employees.delete({
            where: { id }
        });

        if(!result) return false;

        else return true;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const { user_id, ...data } = employeesZod.parse(body);
        const mod_id = await modificationRecordSave(user_id);

        const result = await prisma.employees.update({
            where: { id },
            data: {
                modification_record_id: mod_id,
                ...data
            }
        });

        if(!result) return false;

        else return true

    }
}