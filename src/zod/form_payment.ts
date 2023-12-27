import { z } from "zod";

export const form_payment = z.object({
    type: z.string(),
});