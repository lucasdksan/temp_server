import { financialTypes } from "../types/financialTypes";

export function financialView(data: financialTypes){    
    const { created_at, update_at, ...financial_view } = data;

    return financial_view;
}

export function financialViewMany(data: financialTypes[]){
    return data.map( financial => financialView(financial) );
}