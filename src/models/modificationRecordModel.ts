import { prisma } from "../prisma";

export default class ModificationRecordModel {
    async listing(){
        const result = await prisma.modificationRecord.findMany({
            include: {
                client_alert: true,
                clients: true,
                constructions: true,
                docs_client: true,
                docs_Construction: true,
                employee_files: true,
                employees: true,
                equipments: true, 
                financial: true,
                image_equipment: true, 
                possible_customers: true,
                proof_expense_files: true,
                send_emails: true,
                suppliers: true,
            }
        });

        if(!result) throw Error("Error in get List");

        return result;
    }

    async indexing(id: any) {
        if (!id || id === "") throw Error("Not exist");

        const modificationRecord = await prisma.modificationRecord.findFirst({
            where: { id },
            include: {
                client_alert: true,
                clients: true,
                constructions: true,
                docs_client: true,
                docs_Construction: true,
                employee_files: true,
                employees: true,
                equipments: true,
                financial: true,
                image_equipment: true,
                possible_customers: true,
                proof_expense_files: true,
                send_emails: true,
                suppliers: true,
                users: true
            }
        });

        if (!modificationRecord) throw Error("Not exist");

        return modificationRecord;
    }
}