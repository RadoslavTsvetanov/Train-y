import { HookBuilder } from "@custom-express/framework";
import { waitMessage } from "./messages/recieve/wait";

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
            waitMessage
        } as const,
    messagesItCanSend: {

        },
}