import { Optionable } from "@custom-express/better-standard-library";
import { VPromise } from "../../../types/Promises/vpromise";
import { Forum } from "../../../db/postgre/src/generated/prisma";
import { TODO } from "../../../types/todo";

export interface IForumsService {
    create(type : Forum["type"], title: Forum["title"] /* a bit pretenticous but i prefer to have this automatically change when i change the type in the prisma schema*/): VPromise;
    get(id: string): Promise<Optionable<Forum>>
    addMessageToForum(ctx:{forumId: string, messageData: {creatorId: string, content: string}}): Promise<TODO>
}