import { z } from "zod";

export const auth_zod = z.object({
    master: z.union([z.boolean(), z.null(), z.undefined()]),
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
    tel: z.string()
});