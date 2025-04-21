import type { id } from "../../types/id";
import type { VPromise } from "../../types/Promises/vpromise";
import type { TimeStampData } from "../../types/timstampData";

export interface TimeQueriableDTO<T extends Record<string, unknown>> {
    getTimeData(id: id): Promise<TimeStampData<T>[]>
    addData(id: id, data: TimeStampData<T>): VPromise
}