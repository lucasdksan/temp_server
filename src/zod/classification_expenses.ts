import { z } from "zod";

export const classification_expenses = z.object({
    type: z.string(),
});