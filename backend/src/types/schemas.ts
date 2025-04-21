import { z } from "zod";


const baseSchemas = {
    location:  
                z.object({
                    latitude: z.number().nonnegative(),
                    longitude: z.number().nonnegative()
                }),
    line: z.number().nonnegative(),
    entityId: z.string().nonempty(),
    timestamp: z.date()
}


export const mutationsSchemas = {
    liveEntityData: z.object({
        location: baseSchemas.location,
        id: baseSchemas.entityId,
        timestamp: baseSchemas.timestamp
    })
}




export const schemas = baseSchemas