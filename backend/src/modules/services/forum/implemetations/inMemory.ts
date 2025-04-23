import { Optionable } from "@custom-express/better-standard-library";
import { IForumsService } from "../interface";
import { VPromise } from "../../../../types/Promises/vpromise";
import { Forum } from "../../../../db/postgre/src/generated/prisma";
import { TODO } from "../../../../types/todo";
export class InMemoryForumsService implements IForumsService {
    private forums: Map<string, Forum & { messages: { creatorId: string; content: string }[] }> = new Map();
    private idCounter = 0;

    async create(type: Forum["type"], title: Forum["title"]){
        const id = (++this.idCounter).toString();
        const newForum: Forum & { messages: { creatorId: string; content: string }[] } = {
            id,
            type,
            title,
            messages: [],
        };
        this.forums.set(id, newForum);
        return Promise.resolve(); // assuming VPromise is `Promise<void>`
    }

    async get(id: string): Promise<Optionable<Forum>> {
        const forum = this.forums.get(id);
        if (!forum) return new Optionable(null); // assuming Optionable<T> is something like { some?: T, none?: true }
        const { messages, ...forumData } = forum;
        return new Optionable(forumData) ;
    }

    async addMessageToForum(ctx: {
        forumId: string;
        messageData: { creatorId: string; content: string };
    }): Promise<TODO> {
        const forum = this.forums.get(ctx.forumId);
        if (!forum) {
            throw new Error("Forum not found");
        }

        forum.messages.push(ctx.messageData);

        // Assuming TODO is some placeholder you want replaced — here's a simple response
        return Promise.resolve({ ok: true });
    }
}
