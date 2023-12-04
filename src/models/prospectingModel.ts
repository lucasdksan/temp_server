import { formatDataStartPossibleCustomers } from "../libs/formatDataStartPossibleCustomers";
import { singleRequest } from "../libs/singleRequest";
import validationDoc from "../libs/validationDoc";
import { prisma } from "../prisma";

export default class ProspectingModel {
    async process() {
        const client_list = await prisma.possibleCustomersTemporary.findMany();
        const limitRequisitionsPerMinute = 3;
        const timeInterval = 60 * 1000 / limitRequisitionsPerMinute;

        if (!client_list || client_list.length === 0) {
            throw Error("No valid temporary clients found.");
        }

        const errors: any[] = [];

        const processClient = async (client: any) => {
            if (client.search_performed) return;

            try {
                let { docRegex, isError } = validationDoc(client.cnpj);

                if (!isError) throw Error("Cnpj Invalid");

                let result = await singleRequest(docRegex);
                let filteredData = formatDataStartPossibleCustomers(client, result);
                let possibleCustomers = await prisma.possibleCustomers.create({ data: filteredData });

                return { id: possibleCustomers.id, ...filteredData };
            } catch (error) {
                errors.push({ id: client.id, error: error });
                return null;
            }
        };

        const startProcessing = async () => {
            const startTime = Date.now();
            const promises: Promise<any>[] = [];

            for (const client of client_list) {
                promises.push(processClient(client));
            }

            const results = await Promise.all(promises);

            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
            const remainingTime = Math.max(0, timeInterval - elapsedTime);

            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime));
            }

            return results;
        };

        const processedClients = await startProcessing();

        return { processedClients, errors };
    }
}
