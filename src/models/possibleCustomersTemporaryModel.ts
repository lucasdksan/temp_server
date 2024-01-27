import { PossibleCustomersTemporary } from "@prisma/client";
import { prisma } from "../prisma";
import { possible_customers_temporary } from "../zod/possible_customers_temporary";

export default class PossibleCustomersTemporaryModel {
    async creating(body: any[]): Promise<{ saved: PossibleCustomersTemporary[]; notSaved: any[] }> {
        if (!body || !Array.isArray(body) || body.length === 0) {
            throw Error("Invalid Data");
        }

        const saved: PossibleCustomersTemporary[] = [];
        const notSaved: any[] = [];

        for (let item of body) {
            try {
                let data = possible_customers_temporary.parse(item);
                let { cnpj: tempCnpj } = data;
                let existClient = await prisma.possibleCustomersTemporary.findFirst({
                    where: {
                        cnpj: tempCnpj
                    }
                });

                if(existClient) throw Error("Client exist");

                let resultCreate = await prisma.possibleCustomersTemporary.create({ data });
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

    async creatingIndex(body: any){
        if (!body) throw Error("Invalid Data");

        const data = possible_customers_temporary.parse(body);
        const { cnpj: tempCnpj } = data;
        const existClient = await prisma.possibleCustomersTemporary.findFirst({
            where: {
                cnpj: tempCnpj
            }
        });

        if(existClient) throw Error("Client exist");

        const resultCreate = await prisma.possibleCustomersTemporary.create({ data });

        if(!resultCreate) return false;
        else return true;
    }

    async listing(){
        const list = await prisma.possibleCustomersTemporary.findMany();

        if(!list) throw Error("Error Returning the List");

        const list_filted = list.filter(
            (client) => !client.search_performed
        );

        return list_filted;
    }
}