import { CustomWebSocketRouter, HookBuilder, MessageThatCanBeReceivedBuilder } from "@custom-express/framework";
import { z } from "zod";
import { Optionable, Port } from '@custom-express/better-standard-library';
import { mutationsSchemas, schemas } from "../../types/schemas";
import { ITimeSeriesService } from "../../modules/services/data/interface";
import { WebSocket } from "bun";
import { channel as trainChannel } from "./routes/train";
import { channel as passengerChannel } from "./routes/passenger";

type id = string

type Entity = "passenger" | "train"

type Connection = {
    type: Entity,
    ws: WebSocket
}

const connections = new Map<id, Connection>()
const connections2 = new Map<Connection,id>()



const services: {t: ITimeSeriesService } = {}

function connectionType(v: unknown): Entity {
    return
} 

export const defintion = new CustomWebSocketRouter({
    
}, {}, new Optionable({
    onConnection: {
        ordered: HookBuilder.new("onConnection").add({
            execute: ({ws}) => {
                const connection = {type: connectionType(ws.url),ws}     
                connections.set(ws.url,connection )
                connections2.set(connection, ws.url)
    }, key: ""}).build(), independent: []},
}))
    .addChannel("train", trainChannel)
    .addChannel("passenger", passengerChannel)
    .start(new Port(4000))