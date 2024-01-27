import { z } from "zod";

export const supplierZod = z.object({
    name: z.string(),
    corporate_reason: z.string(),
    cnpj: z.string(),
    city: z.string(),
    uf: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    cep: z.string(),
    email: z.string().email(),
    type: z.string(),
    tel: z.string(),
    user_id: z.string(),
});