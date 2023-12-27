import { prisma } from "../prisma";
import { classification_expenses } from "../zod/classification_expenses";

export default class ClassificationExpensesModel {
    async architect(body: any){
        if (!body) throw Error("Files not exist");
        
        const { type } = classification_expenses.parse(body);
        const result_create = await prisma.classificationExpenses.create({
            data: {
                type
            }
        });

        if(!result_create) throw Error("Fail Create Type Classification Expenses");

        return true;
    }

    async rise(){
        const resultList = await prisma.classificationExpenses.findMany();

        if(!resultList) throw Error("Erro in list form payment!");

        return resultList;
    }
}