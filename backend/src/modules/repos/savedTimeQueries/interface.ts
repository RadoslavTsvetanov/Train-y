import { Optionable } from "@custom-express/better-standard-library";
import { Event } from "../../../db/cassandra/main";
import { VPromise } from "../../../types/Promises/vpromise";
import { timeQuery } from "../../../types/timeQuery";

export interface ITimeRangeCacheRepository {
    get(query: timeQuery): Promise<Optionable<Event>> 
    save(e: Event): VPromise

}