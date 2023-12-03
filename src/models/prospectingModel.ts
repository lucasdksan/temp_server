import { formatDataStartPossibleCustomers } from "../libs/formatDataStartPossibleCustomers";
import { singleRequest } from "../libs/singleRequest";
import validationDoc from "../libs/validationDoc";
import { prisma } from "../prisma";

export default class ProspectingModel {
    async process(){
        const arr_client: any[] = [];
        const client_list = await prisma.possibleCustomersTemporary.findMany();
        const limitRequisitionsPerMinute = 3;
        const timeInterval = 60 * 1000 / limitRequisitionsPerMinute;

        if (!client_list || client_list.length === 0) {
            throw Error("No valid temporary clients found.");
        }
        
        for (const client of client_list) {
            if (client.search_performed) continue;
            let startTime = Date.now();

            try {
                let { docRegex, isError } = validationDoc(client.cnpj);

                if(!isError) throw Error("Cnpj Invalid");

                let result = await singleRequest(docRegex);
                let filteredData = formatDataStartPossibleCustomers(client, result);
                let possibleCustomers = await prisma.possibleCustomers.create({ data: filteredData });

                arr_client.push({ id: possibleCustomers.id, ...filteredData });

                await prisma.possibleCustomersTemporary.update({
                    where: { id: client.id },
                    data: { search_performed: true }
                });
            } catch (error) {
                throw Error(`Error processing client ${client.id}: ${error}.`);
            }

            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
            const remainingTime = Math.max(0, timeInterval - elapsedTime);

            await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        return arr_client;
    }
}