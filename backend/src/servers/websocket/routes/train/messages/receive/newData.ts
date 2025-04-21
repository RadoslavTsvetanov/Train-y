import { HookBuilder, MessageThatCanBeReceivedBuilder } from "@custom-express/framework";
import { mutationsSchemas } from "../../../../../../types/schemas";
import { ConnectionService } from "../../../../../../modules/services/connections/implementations/inmemory";
import { connectionsSingletonFprDevPurposes } from "../../../../../../modules/services/connections";

export const newTrainData = new MessageThatCanBeReceivedBuilder(
  {
    beforeHandler: {
      ordered: HookBuilder.new("beforeHandle")
        .add({
          key: "ff",
          execute: (v) => {
            return { ...v, message: mutationsSchemas.liveEntityData.parse({}) };
          },
        })

        .build(),
      independent: [],
    },
    afterHandler: {
      ordered: HookBuilder.new("beforeHandle")
        .add({ key: "jiji", execute: (v) => 1 })
        .build(),
      independent: [],
    },
    onErrorr: (b) => console.log,
  },
  async ({ ws, message }) => {
    // echo back to all connected clients
    (await connectionsSingletonFprDevPurposes.getUserConnections())
      .ifCanBeUnpacked(connections => {
        connections.forEach(c => c.ws.send(JSON.stringify(message)))
      })

    // services.t.addTimestampData(connections2.get(ws).toString(), v);
  }
).build();
