import { equipmentsTypes } from "../types/equipmentsTypes";

export function equipmentsView(data: equipmentsTypes){    
    const { created_at, update_at, modification_record_id, ...equipen_view } = data;

    return equipen_view;
}

export function equipmentsViewMany(data: equipmentsTypes[]){
    return data.map( equipment => equipmentsView(equipment) );
}