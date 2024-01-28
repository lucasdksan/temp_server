export type equipmentsTypes = {
    id: string;
    name: string;
    responsible: string;
    type_equipment: string;
    construction_id: string | null;
    employee_id: string | null;
    modification_record_id: string | null;
    created_at: Date;
    update_at: Date;
}