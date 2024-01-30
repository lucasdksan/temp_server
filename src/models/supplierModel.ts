import { supplierZod } from './../zod/supplierZod';
import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from '../prisma';

export default class SupplierModel {
    async creating(body: any) {
        if (!body) throw Error("Data invalit");

        const { user_id, ...data } = supplierZod.parse(body);
        const modId = await modificationRecordSave(user_id);
        const supplier = await prisma.suppliers.create({
            data: {
                modification_record_id: modId,
                ...data
            }
        });

        if (!supplier) return false;
        else return true;
    }

    async listing() {
        const resultList = await prisma.suppliers.findMany();

        if (!resultList) throw Error("List not exist");

        return resultList;
    }

    async indexing(id: any) {
        if (!id) throw Error("Error in Suppplier search: Supplier does not exist");

        const supplier = await prisma.suppliers.findFirst({
            where: { id }
        });

        if (!supplier) throw Error("Error in Suppplier search: Supplier does not exist");

        return supplier;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error in Suppplier search: Supplier does not exist");

        const result = await prisma.suppliers.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const { user_id, ...data } = supplierZod.parse(body);
        const modId = await modificationRecordSave(user_id);

        const result = await prisma.suppliers.update({
            where: { id },
            data: {
                modification_record_id: modId,
                ...data
            }
        });

        if(!result) return false;
        else return true;
    }
}