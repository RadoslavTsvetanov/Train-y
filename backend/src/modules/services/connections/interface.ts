import { Optionable } from "@custom-express/better-standard-library"
import { VPromise } from "../../../types/Promises/vpromise"



export type Entity = "passenger" | "train"


export type Connection = {
    type: Entity,
    ws: WebSocket
}

export interface IConnectionsService {
    addConnection(c: Connection): VPromise
    getTrainConnections(): Promise<Optionable<Connection[]>>
    getUserConnections(): Promise<Optionable<Connection[]>>
    removeConnection(): VPromise
}

