import { possibleCustomersTemporaryTypes } from "../types/possibleCustomersTemporaryTypes";

export function possibleCustomersTemporaryView(data: possibleCustomersTemporaryTypes){
    const { created_at, update_at, ...possible_customer_temporary_view } = data;

    return possible_customer_temporary_view;
}

export function possibleCustomersTemporaryViewMany(data: possibleCustomersTemporaryTypes[]){
    return data.map( possible_customer_temporary => possibleCustomersTemporaryView(possible_customer_temporary) );
}