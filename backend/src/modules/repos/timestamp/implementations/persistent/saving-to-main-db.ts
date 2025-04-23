import { Optionable } from "@custom-express/better-standard-library";
import { timeQuery } from "../../../../../types/timeQuery";
import { ITimestampDataRepo } from "../../interface";
import { PrismaClient, RealtimeDataEntry } from "@prisma/client";

export class TimestampedDataRepo implements ITimestampDataRepo {
  private pr = new PrismaClient();

  async saveTimestampedData(v: RealtimeDataEntry): Promise<void> {
    await this.pr.realtimeDataEntry.create({
      data: {
        id: v.id,
        timestamp: v.timestamp,
        transportId: v.transportId,
        dataEntryId: v.dataEntryId,
      },
    });
  }

  async getRealtimeData(
    query: timeQuery
  ): Promise<Optionable<RealtimeDataEntry[]>> {
    const result = await this.pr.realtimeDataEntry.findMany({
      where: {
        timestamp: {
          gte: query.start,
          lte: query.end,
        },
      },
    });

    return result.length ? new Optionable(result) : new Optionable(null);
  }
}
