import * as moment from 'moment';
import { Event, event } from '../../../../db/cassandra/main';
import { timeQuery } from '../../../../types/timeQuery';
import { ITimeRangeCacheRepository } from '../interface';
import { Optionable } from '@custom-express/better-standard-library';

export class CassandraDataRepo implements ITimeRangeCacheRepository {
  async save(e: Event) {
    try {
      const eventData = new event({
        start_timestamp: moment(e.start_timestamp).toDate(),
        end_timestamp: moment(e.end_timestamp).toDate(),
        content: e.context,
      });

      await eventData.save();
      console.log('Data saved to Cassandra:', eventData);
    } catch (error) {
      console.error('Error saving to Cassandra:', error);
    }
  }

  async get(query: timeQuery): Promise<Optionable<Event>> {
    try {
      const start = new Date(query.start);
      const end = new Date(query.end);

      const results = await event.findAsync({
        start_timestamp: start,
        end_timestamp: end,
      });

      console.log(`Found ${results.length} event(s) for start=${start.toISOString()} and end=${end.toISOString()}`);
      return results;
    } catch (error) {
      console.error('Error retrieving from Cassandra:', error);
      return new Optionable(undefined);
    }
  }

}