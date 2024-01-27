import { modificationRecordSave } from "../libs/modificationRecordSave";
import { prisma } from "../prisma";
import { possible_customer } from "../zod/possible_customer";

export default class listingPossibleCustomersModel {
    async creating(body: any) {
        if (!body) throw Error("Error Adding Possible Customer");

        const { user_id, ...data } = possible_customer.parse(body);
        const modId = await modificationRecordSave(user_id);

        const resultCrate = await prisma.possibleCustomers.create({
            data: {
                modification_record_id: modId,
                ...data
            }
        });

        if (!resultCrate) return false;
        else return true;
    }

    async listing() {
        const list = await prisma.possibleCustomers.findMany({ include: { possible_customer_main_activity: true, possible_customer_QSA: true } });

        if (!list) throw Error("Error Returning the List");

        return list;
    }

    async updating(id: any, body: any) {
        if (!id) throw Error("Possible Customers error");
        if (!body) throw Error("Possible Customers error");

        const resultUpdate = await prisma.possibleCustomers.update({
            where: { id },
            data: body
        });

        if (!resultUpdate) throw Error("Possible Customers error");

        return resultUpdate;
    }

    async indexing(id: any) {
        if (!id) throw Error("Error in Possible Customers search: Possible Customers does not exist");

        const resultSearch = await prisma.possibleCustomers.findUnique({
            where: { id },
            include: { possible_customer_main_activity: true, possible_customer_QSA: true }
        });

        if (!resultSearch) throw Error("Error in Possible Customers search: Possible Customers does not exist");

        return resultSearch;
    }

    async excluding(id: any) {
        if (!id) throw Error("Error removing Possible Customers: Possible Customers does not exist");

        const resultDelete = await prisma.possibleCustomers.delete({
            where: { id }
        });

        if (!resultDelete) return false;
        else return true;
    }

    async stocking(body: any) {
        if (!body) throw Error("Possible Customers error");
        const arraYExistCleints: any[] = [];

        try {
            for (let clientRest of body) {
                let { possible_customer_QSA, possible_customer_main_activity, search_performed, cnpj, user_id, ...rest } = clientRest;
                let exist = await prisma.possibleCustomers.findFirst({
                    where: {
                        cpf_cnpj: cnpj
                    }
                });
                let modId = await modificationRecordSave(user_id);

                if (exist !== null) {
                    arraYExistCleints.push(exist);
                } else {
                    let createdClient = await prisma.possibleCustomers.create({
                        data: {
                            modification_record_id: modId,
                            cpf_cnpj: cnpj,
                            
                            ...rest
                        }
                    });

                    if (createdClient) {
                        await prisma.possibleCustomerMainActivity.create({
                            data: {
                                code: possible_customer_main_activity.code,
                                text: possible_customer_main_activity.text,
                                possible_customer_id: createdClient.id
                            }
                        });

                        for (let qsa of possible_customer_QSA) {
                            await prisma.possibleCustomerQSA.create({
                                data: {
                                    name: qsa.name,
                                    qual: qsa.qual,
                                    possible_customer_id: createdClient.id
                                }
                            });
                        }

                        await prisma.possibleCustomersTemporary.update({
                            where: {
                                id: clientRest.id
                            },
                            data: {
                                search_performed: true
                            }
                        });
                    } else {
                        throw Error("Error in Create Possible Client");
                    }
                }
            }

            return true;
        } catch (error) {
            return error;
        }
    }
}