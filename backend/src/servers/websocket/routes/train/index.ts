import { HookBuilder, MessageThatCanBeReceivedBuilder } from "@custom-express/framework";
import { mutationsSchemas, schemas } from "../../../../types/schemas";
import { z } from "zod";
import { newTrainData } from "./messages/receive/newData";

export const channel = {

        hooks: {
            beforeHandle: {
                ordered: HookBuilder
                    .new("beforeHandle")
                    .add({
                        key: "lolo",
                        execute: (v) => ({ hi: "" } as const),
                    })
                    .build(),
                independent: [],
            },
        },
        
        messagesItCanReceive: {
            newTrainData
        } as const,
        messagesItCanSend: {
            trainData: z.object({
                line: schemas.line,
            }),
        },
}