import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";

export default class FinancialModel {
    async creating(body: any) {
        try {
            if (!body) throw new Error("Files not exist");

            const { description, expense_classification, date_receipt,
                value_computed, nfe_nfce, payment_methods,
                comments, constructions_id, description_the_main, user_id } = body;
            const mod_id = await modificationRecordSave(user_id);

            const resultCreatedFinancial = await prisma.financial.create({
                data: {
                    description,
                    expense_classification,
                    date_receipt,
                    value_computed,
                    nfe_nfce,
                    payment_methods,
                    comments,
                    description_the_main,
                    constructions_id: constructions_id ? constructions_id : null,
                    modification_record_id: mod_id
                }
            });

            if (!resultCreatedFinancial) return false;
            else return true;
        } catch (error) {
            return false;
        } finally {
            await prisma.$disconnect();
        }
    }

    async listing() {
        const date = new Date();

        const list = await prisma.financial.findMany({
            where: {
                OR: [
                    { date_receipt: { contains: String(date.getFullYear()) } },
                    { date_receipt: { contains: String(date.getFullYear() - 1) } }
                ]
            }
        });

        if (!list) throw new Error("Não possui lista");

        return list;
    }

    async indexing(year: string) {
        if (!year) throw new Error("Not exist");

        const list = await prisma.financial.findMany({
            where: {
                OR: [
                    { date_receipt: { contains: year } }
                ]
            }
        });

        if (!list) throw new Error("Não possui lista");

        return list;
    }

    async excluding(id: any) {
        if (!id) throw Error("Financial error");

        const result = await prisma.financial.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Financial error");
        if (!body) throw Error("Financial error");

        const { user_id, ...data } = body;
        const mod_id = await modificationRecordSave(user_id);

        const resultCreatedFinancial = await prisma.financial.update({
            where: { id },
            data: {
                modification_record_id: mod_id,
                ...data
            }
        });

        if (!resultCreatedFinancial) return false;
        else return true;
    }
}
