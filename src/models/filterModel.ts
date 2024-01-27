import { prisma } from "../prisma";

export default class FilterModel {
    async filtering(body: any) {
        if (!body) throw Error("Filter error");

        const { selectedState, startDate, endDate } = body;

        if (!selectedState && !startDate && !endDate) {
            throw Error("Filter error");
        }

        let filteredClients = await prisma.possibleCustomers.findMany();

        if (selectedState !== "") {
            filteredClients = filteredClients.filter(
                (client) => client.uf === selectedState
            );
        }

        if (startDate !== "") {
            const startDateUTC = new Date(startDate);
            startDateUTC.setUTCHours(0, 0, 0, 0);
            filteredClients = filteredClients.filter(
                (client) => new Date(client.validity) >= startDateUTC
            );
        }

        if (endDate !== "") {
            const endDateUTC = new Date(endDate);
            endDateUTC.setUTCHours(23, 59, 59, 999);
            filteredClients = filteredClients.filter(
                (client) => new Date(client.validity) <= endDateUTC
            );
        }

        return filteredClients;
    }
}