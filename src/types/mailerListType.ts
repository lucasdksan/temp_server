export type mailerListType = {
    id: string;
    sender: string;
    recipient: string;
    theme: string;
    modification_record_id: string | null;
    created_at: Date;
    update_at: Date;
}