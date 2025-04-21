import { HookBuilder, MessageThatCanBeReceivedBuilder } from "@custom-express/framework";
import { z } from "zod";
import { connectionsSingletonFprDevPurposes } from "../../../../../../modules/services/connections";

export const waitMessage = new MessageThatCanBeReceivedBuilder(
    {
        beforeHandler: {
            ordered: HookBuilder
                .new("beforeHandle")
                .guard(z.object({
                    id: z.string(), // since each transportt has a unique even if its different form of transport 
                    message: z.string()
                }), "gg")
                .build(),
            independent: [],
        }, afterHandler: {
            ordered: HookBuilder
                .new("beforeHandle")
                .add({ key: "jiji", execute: (v) => 1 })
                .build(),
            independent: [],
        },
        onErrorr: (b) => console.log,
    },
    async ctx => {
        // echo back to all connected clients
        // TODO: add some spam security so that a user cant reqquest it multiple times nor ca he request a bus that is more than 100 meters from him to wait 
        (await (connectionsSingletonFprDevPurposes.getTrainConnections())).ifCanBeUnpacked(connections => connections.forEach(c => c.ws.send(JSON.stringify(ctx.message))))
    }
).build();
