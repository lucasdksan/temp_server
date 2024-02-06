import { prisma } from "../prisma";
import { classification_expenses } from "../zod/classification_expenses";

export default class ClassificationExpensesModel {
    async creating(body: any){
        if (!body) throw Error("Files not exist");
        
        const { type } = classification_expenses.parse(body);
        const result_create = await prisma.classificationExpenses.create({
            data: {
                type
            }
        });

        if(!result_create) return false;
        else return true;
    }

    async listing(){
        const resultList = await prisma.classificationExpenses.findMany();

        if(!resultList) throw Error("Erro in list form payment!");

        return resultList;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error in ClassificationExpenses search: ClassificationExpenses does not exist");

        const result = await prisma.classificationExpenses.delete({
            where: { id }
        });

        if (!result) return false;
        else return true;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Classification and Expense error");
        if (!body) throw Error("Classification and Expense error");

        const { type } = body;

        const classificationExpenses = await prisma.classificationExpenses.update({
            where: { id },
            data: { type }
        });

        if(!classificationExpenses) return false;
        else return true;
    }
}