import { EnvManager } from "@custom-express/better-standard-library/src/safe-envs/env";

export const ENV = EnvManager.new([
    {
        key: "CONTACT_POINTS",
        default: ["209.38.192.145"]
    },
    {
        key: "LOCAL_DATA_CENTER",
        "default": ["datacenter1"]
    },
    {
        key: "KEYSPACE",
        default: "my_keyspace"
    },
    {
        key: "clientId",
        default: "kafka-consumer"
    },
    {
        key: "brokers",
        default: ["localhost:9092"]
    }
] as const)

