CREATE EXTENSION IF NOT EXISTS timescaledb


SELECT create_hypertable('RealtimeDataEntry', 'timestamp');

<-- SELECT create_hypertable('TransportEvent', 'timestamp', migrate_data => true); if there is data in the db use this -->

