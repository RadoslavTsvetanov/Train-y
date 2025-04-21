import { cassandraClient } from "./main";

cassandraClient.syncDB(err => {
if (err) {
    console.error("Failed to sync schema with Cassandra:", err);
  } else {
    console.log("Cassandra schema synchronized successfully.");
  }
})
