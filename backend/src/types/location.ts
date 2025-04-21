import type { z } from "zod";
import type { schemas } from "./schemas";

export type locationData = z.infer<typeof schemas.location>