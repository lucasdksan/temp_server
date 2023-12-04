import { PossibleCustomersTemporary } from "@prisma/client";
import { prisma } from "../prisma";
import { possible_customers_temporary } from "../zod/possible_customers_temporary";

export default class PossibleCustomersTemporaryModel {
    async process(body: any[]): Promise<{ saved: PossibleCustomersTemporary[]; notSaved: any[] }> {
        if (!body || !Array.isArray(body) || body.length === 0) {
            throw Error("Invalid Data");
        }

        const saved: PossibleCustomersTemporary[] = [];
        const notSaved: any[] = [];

        for (const item of body) {
            try {
                const data = possible_customers_temporary.parse(item);
                const resultCreate = await prisma.possibleCustomersTemporary.create({ data });
                saved.push(resultCreate);
            } catch (error) {
                notSaved.push({ item, error });
            }
        }

        if (notSaved.length > 0) {
            throw Error(`Some items failed to save: ${JSON.stringify(notSaved)}`);
        }

        return { saved, notSaved };
    }

    async list(){
        const list = await prisma.possibleCustomersTemporary.findMany();

        if(!list) throw Error("Error Returning the List");

        return list;
    }
}