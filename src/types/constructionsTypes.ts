export type constructionsTypes = {
    id: string;
    name: string;
    city: string;
    uf: string;
    street: string;
    number: string;
    neighborhood: string;
    cep: string;
    latitude: string | null;
    longitude: string | null;
    start_date: string;
    end_date: string;
    total_value_work: string;
    amount_received: string;
    amount_spent: string;
    comments: string | null;
    client_id: string | null;
    stats: number | null;
    update_at: Date;
    created_at: Date;
}