import { z } from "zod";

export const employeesZod = z.object({
    name: z.string(),
    tel: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    position_in_construction: z.string(),
    construction_id: z.union([z.string(), z.null(), z.undefined()]),
    user_id: z.string(),
});