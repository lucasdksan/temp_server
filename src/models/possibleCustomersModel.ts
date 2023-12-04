import { prisma } from "../prisma";
import { possible_customer } from "../zod/possible_customer";

export default class PossibleCustomersModel {
    async process(body: any){
        if(!body) throw Error("Error Adding Possible Customer");

        const data = possible_customer.parse(body);
        const resultCrate = await prisma.possibleCustomers.create({
            data: data
        });

        if(!resultCrate) throw Error("Error Adding Possible Customer");

        return resultCrate;
    }

    async list(){
        const list = await prisma.possibleCustomers.findMany({ include: { possible_customer_main_activity: true, possible_customer_QSA: true } });

        if(!list) throw Error("Error Returning the List");

        return list;
    }

    async updata(id: any, body: any){
        if(!id) throw Error("Possible Customers error");
        if(!body) throw Error("Possible Customers error");

        const resultUpdate = await prisma.possibleCustomers.update({
            where: { id },
            data: body
        });
    
        if(!resultUpdate)throw Error("Possible Customers error");
    
        return resultUpdate;
    }

    async get(id: any){
        if(!id) throw Error("Error in Possible Customers search: Possible Customers does not exist");

        const resultSearch = await prisma.possibleCustomers.findUnique({
            where: { id },
            include: { possible_customer_main_activity: true, possible_customer_QSA: true }
        });

        if(!resultSearch) throw Error("Error in Possible Customers search: Possible Customers does not exist");

        return resultSearch;
    }

    async remove(id: any){
        if(!id) throw Error("Error removing Possible Customers: Possible Customers does not exist");

        const resultDelete = await prisma.possibleCustomers.delete({
            where: { id }
        });
    
        if(!resultDelete) throw Error("Error removing Possible Customers: Possible Customers does not exist");
    
        return resultDelete;
    }
}