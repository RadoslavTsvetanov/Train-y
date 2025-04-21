import { Optionable } from "@custom-express/better-standard-library";
import { VPromise } from "../../../../types/Promises/vpromise";
import { Connection, IConnectionsService } from "../interface";

// For testing Purposes
export class ConnectionService implements IConnectionsService {
  private trainConnections: Set<WebSocket> = new Set();
  private passengerConnections: Set<WebSocket> = new Set();

  addConnection(c: Connection): VPromise {
    return new Promise<void>((resolve) => {
      if (c.type === "train") {
        this.trainConnections.add(c.ws);
      } else {
        this.passengerConnections.add(c.ws);
      }
      resolve();
    });
  }

  async getTrainConnections(): Promise<Optionable<Connection[]>> {
    return new Optionable((this.pickOneFromSet(this.trainConnections, "train")));
  }

  async getUserConnections(): Promise<Optionable<Connection[]>> {
    return new Optionable(
      this.pickOneFromSet(this.passengerConnections, "passenger")
    )
  }

  removeConnection(): VPromise {// TODO make it accept an id too and remove it manually using the id 
    return new Promise<void>((resolve) => {
      this.cleanDeadConnections();
      resolve();
    });
  }

  private pickOneFromSet(
    set: Set<WebSocket>,
    type: Connection["type"]
  ): Connection | null {
    for (const ws of set) {
      if (ws.readyState === WebSocket.OPEN) {
        return { type, ws };
      }
    }
    return null;
  }

  private cleanDeadConnections() {
    const isOpen = (ws: WebSocket) => ws.readyState === WebSocket.OPEN;
    this.trainConnections = new Set([...this.trainConnections].filter(isOpen));
    this.passengerConnections = new Set(
      [...this.passengerConnections].filter(isOpen)
    );
  }
}
