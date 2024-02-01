import { z } from "zod";

export const constructionsZod = z.object({
    name: z.string(),
    city: z.string(),
    uf: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    cep: z.string(),
    latitude: z.union([ z.string(), z.null(), z.undefined() ]),
    longitude: z.union([ z.string(), z.null(), z.undefined() ]),
    start_date: z.string(),
    end_date: z.string(),
    total_value_work: z.string(),
    amount_received: z.string(),
    amount_spent: z.string(),
    comments: z.union([ z.string(), z.null(), z.undefined() ]),
    user_id: z.string(),
    client_id: z.union([ z.string(), z.null(), z.undefined() ]),
    stats: z.union([ z.number(), z.null(), z.undefined() ]),
});