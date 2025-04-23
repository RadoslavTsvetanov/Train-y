import { Optionable } from "@custom-express/better-standard-library";
import { Event } from "../../../../db/cassandra/main";
import { timeQuery } from "../../../../types/timeQuery";
import { CassandraDataRepo } from "../../../repos/savedTimeQueries/implementations/cassandra";
import { ITimeRangeCacheRepository } from "../../../repos/savedTimeQueries/interface";
import { ITimestampDataRepo } from "../../../repos/timestamp/interface";
import {  ITimeSeriesService } from "../interface";
import { RealtimeDataEntry } from "../../../../db/postgre/src/generated/prisma";


export class DataService implements ITimeSeriesService {
    
    private cache: ITimeRangeCacheRepository ;
    private timestampStorage: ITimestampDataRepo;
    
    constructor(cache: ITimeRangeCacheRepository, timestampStorage: ITimestampDataRepo) {
        this.cache = cache
        this.timestampStorage = timestampStorage
    }
    async getEntriesDuring(query: timeQuery): Promise<Optionable<Event>> {
        let result = null;
        (await this.cache.get(query)).try({
            ifNone: async () => { 
                (await this.timestampStorage.getRealtimeData(query)).ifCanBeUnpacked(v => {
                    result = v 
                    this.cache.save({
                        start_timestamp: query.start,
                        end_timestamp: query.end,
                        context: JSON.stringify(v)
                    })
                })
            },
            ifNotNone: v => result = v
        })
        return new Optionable(result)
    }

    async addTimestampData(e: RealtimeDataEntry) {

        this.timestampStorage.saveTimestampedData(e)
    }
}