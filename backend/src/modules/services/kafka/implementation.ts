import { Kafka } from "kafkajs";
import { Event } from "../../../db/cassandra/main";
import { VPromise } from "../../../types/Promises/vpromise";
import { IQueue } from "./interface";
import { ENV } from "../../../../env";


console.log(ENV.get("brokers"))

export class Queue implements IQueue {
    async publishNewData(data: Event){

        const kafka = new Kafka({
            clientId: ENV.get("clientId"),
            brokers: ENV.get("brokers"), // Replace with your Kafka broker(s)
        });

        const producer = kafka.producer();

        const messageValue = JSON.stringify(data);

        await producer.connect();
        console.log('Producer connected');

        await producer.send({
            topic: "newData",
            messages: [{ value: messageValue }],
        });

        await producer.disconnect();
    }

}

