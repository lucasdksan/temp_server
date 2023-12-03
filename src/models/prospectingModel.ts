export default class ProspectingModel {
    async process(cnpj: string){
        const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
            method: "GET"
        });
        const data = await response.json();

        if(!data) throw Error("Bad request");

        return data;
    }
}