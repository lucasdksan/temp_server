import { constructionsTypes } from "../types/constructionsTypes";

export function constructionsView(data: constructionsTypes){    
    const { created_at, update_at, ...construction_view } = data;

    return construction_view;
}

export function constructionsViewMany(data: constructionsTypes[]){
    return data.map( construction => constructionsView(construction) );
}