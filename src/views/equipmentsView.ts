import { equipmentsTypes } from "../types/equipmentsTypes";

export function equipmentsView(data: equipmentsTypes){    
    const { created_at, modification_record_id, construction_id, employee_id, update_at, ...equipen_view } = data;

    return equipen_view;
}

export function equipmentsViewMany(data: equipmentsTypes[]){
    return data.map( equipment => equipmentsView(equipment) );
}