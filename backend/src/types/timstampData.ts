import type { locationData } from "./location"

export type TimeStampData<T extends Record<string, unknown>> = {
    timestamp: Date,
    location: locationData, 
    data: T
}