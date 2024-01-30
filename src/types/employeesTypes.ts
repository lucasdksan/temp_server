export type employeesTypes = {
    id: string;
    name: string;
    tel: string;
    email: string;
    cpf: string;
    position_in_construction: string | null;
    construction_id: string | null;
    modification_record_id: string | null;
    created_at: Date;
    update_at: Date;
}