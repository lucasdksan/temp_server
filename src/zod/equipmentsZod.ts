import { z } from "zod";

export const equipmentsZod = z.object({
    name: z.string(),
    responsible: z.string(),
    type_equipment: z.string(),
    construction_id: z.union([z.string(), z.null(), z.undefined()]),
    employee_id: z.union([z.string(), z.null(), z.undefined()]),
    user_id: z.string(),
});