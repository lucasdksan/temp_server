    export type financialTypes = {
        id: string;
        description: string;
        expense_classification: string;
        date_receipt: string;
        value_computed: string;
        nfe_nfce: string;
        payment_methods: string;
        comments: string | null;
        constructions_id: string | null;
        modification_record_id: string | null;
        created_at: Date;
        update_at: Date;
    }