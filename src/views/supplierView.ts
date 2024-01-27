import { supplierTypes } from "../types/supplierTypes";

export function supplierView(data: supplierTypes){    
    const { update_at, created_at, modification_record_id, ...supplier_view } = data;

    return supplier_view;
}

export function supplierViewMany(data: supplierTypes[]){
    return data.map( supplier => supplierView(supplier) );
}