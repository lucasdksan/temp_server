import { z } from "zod";

export const adminZod = z.object({
    master: z.boolean(),
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
    tel: z.string(),
    token: z.string(),
});