import { prisma } from "../prisma";
import { possible_customers_temporary } from "../zod/possible_customers_temporary";

export default class PossibleCustomersTemporaryModel {
    async process(body: any){
        if(!body) throw Error("Invalid Data");

        const data = possible_customers_temporary.parse(body);
        const resultCreate = await prisma.possibleCustomersTemporary.create({ data });

        if(!resultCreate) throw Error("Invalid Data");

        return resultCreate;
    }

    async list(){
        const list = await prisma.possibleCustomersTemporary.findMany();

        if(!list) throw Error("Error Returning the List");

        return list;
    }
}