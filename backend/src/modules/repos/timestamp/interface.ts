import { Optionable } from "@custom-express/better-standard-library";
import { RealtimeDataEntry } from "../../../db/postgre/src/generated/prisma";
import { id } from "../../../types/id";
import { VPromise } from "../../../types/Promises/vpromise";
import { timeQuery } from "../../../types/timeQuery";
import { TODO } from "../../../types/todo";

export interface ITimestampDataRepo {
    saveTimestampedData(v: RealtimeDataEntry): VPromise
    getRealtimeData(timeQuery: timeQuery): Promise<Optionable<TODO>>
}