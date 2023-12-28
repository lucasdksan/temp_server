import { z } from "zod";

export const possible_customers_temporary = z.object({
    cnpj: z.string(),
    type: z.string(),
    date_issue: z.string(),
    comments: z.union([ z.string(), z.null(), z.undefined() ]),
    validity: z.string(),
    situation: z.boolean(),
    search_performed: z.boolean()
});