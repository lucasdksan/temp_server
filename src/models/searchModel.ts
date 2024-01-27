import { prisma } from "../prisma";

export default class SearchModel {
    async looking(body: any) {
        if (!body) throw Error("Search Error");

        const { search } = body;

        if (search === "") return {};

        const resultClient = await prisma.clients.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { city: { contains: search } },
                    { cep: { contains: search } },
                    { construction: { every: { name: search } } },
                    { email: { contains: search } },
                    { cpf_cnpj: { contains: search } },
                    { id: { contains: search } },
                    { neighborhood: { contains: search } },
                    { number: { contains: search } },
                    { secondary_tel: { contains: search } },
                    { secondary_email: { contains: search } },
                    { tel: { contains: search } },
                    { uf: { contains: search } },
                ]
            }
        });

        const resultPossibleClient = await prisma.possibleCustomers.findMany({
            where: {
                OR: [
                    { interested: { contains: search } },
                    { city: { contains: search } },
                    { cep: { contains: search } },
                    { email: { contains: search } },
                    { cpf_cnpj: { contains: search } },
                    { id: { contains: search } },
                    { neighborhood: { contains: search } },
                    { number: { contains: search } },
                    { tel: { contains: search } },
                    { uf: { contains: search } },
                    { date_issue: { contains: search } },
                    { efr: { contains: search } },
                    { date_situation: { contains: search } },
                    { legal_nature: { contains: search } },
                    { fantasy_name: { contains: search } },
                    { id: { contains: search } },
                    { opening: { contains: search } },
                    { public_place: { contains: search } },
                    { reason_situation: { contains: search } },
                    { type_company: { contains: search } },
                    { share_capital: { contains: search } },
                    { status_company: { contains: search } },
                ]
            }
        });

        const resultEmployee = await prisma.employees.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { cpf: { contains: search } },
                    { email: { contains: search } },
                    { tel: { contains: search } }
                ]
            }
        });

        const resultConstruction = await prisma.constructions.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { city: { contains: search } },
                    { cep: { contains: search } },
                    { id: { contains: search } },
                    { neighborhood: { contains: search } },
                    { number: { contains: search } },
                    { uf: { contains: search } },
                    { start_date: { contains: search } }
                ]
            }
        });

        const resultEquipments = await prisma.equipments.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { responsible: { contains: search } }
                ]
            }
        });

        const resultSuppliers = await prisma.suppliers.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { city: { contains: search } },
                    { cep: { contains: search } },
                    { email: { contains: search } },
                    { id: { contains: search } },
                    { neighborhood: { contains: search } },
                    { number: { contains: search } },
                    { tel: { contains: search } },
                    { uf: { contains: search } },
                    { id: { contains: search } },
                ]
            }
        });

        if (!resultClient && 
            !resultConstruction && 
            !resultEmployee && 
            !resultEquipments && 
            !resultPossibleClient && 
            !resultSuppliers) throw Error("Search Error");

        return {
            resultClient,
            resultConstruction,
            resultEmployee,
            resultEquipments,
            resultPossibleClient,
            resultSuppliers
        }
    }
}