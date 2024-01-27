import { formatDataStartPossibleCustomers } from "../libs/formatDataStartPossibleCustomers";
import { singleRequest } from "../libs/singleRequest";
import validationDoc from "../libs/validationDoc";
import { prisma } from "../prisma";
import { formatDataStartPossibleCustomer } from "../libs/formatDataStartPossibleCustomer";

export default class ProspectingModel {
    async starting() {
        const client_list = await prisma.possibleCustomersTemporary.findMany();
        const errors: any[] = [];
        const limitRequisitionsPerMinute = 3;
        const timeInterval = 60 * 1000 / limitRequisitionsPerMinute;

        if (!client_list || client_list.length === 0) {
            throw Error("No valid temporary clients found.");
        }

        const filteredClients = client_list.filter(client => !client.search_performed);

        const processClient = async (client: any) => {
            let { docRegex, isError } = validationDoc(client.cnpj);

            if (client.search_performed) errors.push(client);
            if (!isError) errors.push(client);

            let result = await singleRequest(docRegex);

            return result;
        };

        const startProcessing = async () => {
            const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
            const sendingData: any[] = [];

            for (const client of filteredClients) {
                let validation_client = await prisma.possibleCustomers.findFirst({
                    where: {
                        cpf_cnpj: client.cnpj
                    }
                });

                if (!validation_client) {
                    let result = await processClient(client);
                    let resultFormated = formatDataStartPossibleCustomers(client, result);

                    let client_save = await prisma.possibleCustomers.create({
                        data: resultFormated
                    });

                    if (client_save) {
                        await prisma.possibleCustomersTemporary.update({
                            where: { id: client.id },
                            data: { search_performed: true }
                        });

                        if (result.qsa) {
                            result.qsa.forEach(async (element: { qual: string, nome: string }) => {
                                await prisma.possibleCustomerQSA.create({
                                    data: {
                                        name: element.nome,
                                        qual: element.qual,
                                        possible_customer_id: client_save.id
                                    }
                                });
                            });
                        }

                        if (result.atividade_principal) {
                            result.atividade_principal.forEach(async (element: { code: string, text: string }) => {
                                await prisma.possibleCustomerMainActivity.create({
                                    data: {
                                        code: element.code,
                                        text: element.text,
                                        possible_customer_id: client_save.id
                                    }
                                });
                            });
                        }
                    } else {
                        errors.push(client);
                    }

                    sendingData.push(client_save)

                    await delay(timeInterval);
                }
            }

            return sendingData;
        };

        const processedClients = await startProcessing();

        return { processedClients, errors };
    }

    async working(cnpj: any){
        if(!cnpj) throw Error("Cnpj Invalido");
        if(typeof cnpj !== "string") throw Error("Cnpj Invalido");

        const result = await singleRequest(cnpj);
        const possible_customer_main_activity = result.atividade_principal[0];
        const possible_customer_QSA: {}[]= [];
        
        result.qsa.forEach((element:{ qual: string; nome: string }) => {
            possible_customer_QSA.push({ name: element.nome, qual: element.qual });
        });

        if(!result) throw Error("Cnpj Invalido");

        const formatResult = formatDataStartPossibleCustomer(result);
        return { 
            possible_customer_main_activity,
            possible_customer_QSA: possible_customer_QSA,
            ...formatResult
        };
    }
}
