export type possibleCustomersTemporaryTypes = {
    id: string,
    cnpj: string,
    type: string,
    date_issue: string,
    comments: string | null,
    validity: string,
    deadline_expire: string,
    situation: boolean,
    search_performed: boolean,
    update_at: Date;
    created_at: Date;
}   