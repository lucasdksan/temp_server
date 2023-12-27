import { prisma } from "../prisma";

export default class FinancialModel {
    async create(body: any, file: Express.Multer.File | undefined) {
        try {
            if (!body) throw new Error("Files not exist");
            if (!file) throw new Error("File not exist");

            const { description, expense_classification, date_receipt,
                value_computed, nfe_nfce, payment_methods,
                comments, constructions_id, description_the_main } = body;

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
                    constructions_id: constructions_id ? constructions_id : null
                }
            });

            // if (result) {
            //     await prisma.proofExpenseFiles.create({
            //         data: {
            //             file_name: file.originalname,
            //             financial_id: resultCreatedFinancial.id
            //         }
            //     });
            // }

            return true;
        } catch (error) {
            console.log("Error: ", error);
            return false;
        } finally {
            await prisma.$disconnect();
        }
    }

    async list() {
        const list = await prisma.financial.findMany();

        if (!list) throw new Error("Não possui lista");

        return list;
    }
}
