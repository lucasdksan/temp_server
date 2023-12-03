export const singleRequest = async (cnpj: string) => {
    const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
        method: "GET"
    });
    
    const data = await response.json();

    return data;
}