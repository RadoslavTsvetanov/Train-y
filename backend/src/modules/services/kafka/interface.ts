import { Event } from "../../../db/cassandra/main";
import { VPromise } from "../../../types/Promises/vpromise";

export interface IQueue {
    publishNewData(data: Event): VPromise
}