import { possibleCustomersType } from "../types/possibleCustomersType";

export function possibleCustomersView(data: possibleCustomersType){
    const { created_at, update_at, ...possible_customer_view } = data;

    return possible_customer_view;
}

export function possibleCustomerViewMany(data: possibleCustomersType[]){
    return data.map( possible_customer => possibleCustomersView(possible_customer) );
}