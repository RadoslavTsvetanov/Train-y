import { z } from "zod";
import { schemas } from "../../../../../../types/schemas";

export const TransportsData = z.object({
    line: z.number(),
    type: z.enum(["bus", "tramway"]),
    location: schemas.location,
    id: z.number()
})