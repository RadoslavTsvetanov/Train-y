import { Optionable } from "@custom-express/better-standard-library";
import { Event } from "../../../db/cassandra/main";
import { VPromise } from "../../../types/Promises/vpromise";
import { timeQuery } from "../../../types/timeQuery";
import { RealtimeDataEntry } from "../../../db/postgre/src/generated/prisma";

export interface ITimeSeriesService{
    /**
     *  note that it must save a peformed time query in a cache
     * 
     */
    getEntriesDuring(query: timeQuery): Promise<Optionable<Event>>
    addTimestampData(e: RealtimeDataEntry): VPromise
}