import { z } from "zod";

export const authenticate_zod = z.object({
    email: z.string().email(),
    password: z.string()
});