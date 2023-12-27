import { descriptionWorkServiceTypes } from "../types/descriptionWorkServiceTypes";

export function descriptionWorkServiceView(data: descriptionWorkServiceTypes){    
    const { created_at, update_at, ...descriptionWorkService_view } = data;

    return descriptionWorkService_view;
}

export function descriptionWorkServiceViewMany(data: descriptionWorkServiceTypes[]){
    return data.map( descriptionWorkService => descriptionWorkServiceView(descriptionWorkService) );
}