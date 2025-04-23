import { Optionable } from "@custom-express/better-standard-library";
import { IAuth } from "../interface";
import { User } from "../../../../db/postgre/src/generated/prisma";
import { id } from "../../../../types/id";

export class InMemoryAuthService implements IAuth {
    private usersByUsername: Map<string, User> = new Map();
    private tokensByUserId: Map<id, string> = new Map();
    private usersByToken: Map<string, User> = new Map();

    // Simple counter for generating user IDs and tokens
    private tokenCounter = 0;

    async isUserAlreadyConnected(token: string): Promise<boolean> {
        return this.usersByToken.has(token);
    }

    async grantToken(userId: id): Promise<string> {
        const user = [...this.usersByUsername.values()].find(u => u.id === userId);
        if (!user) throw new Error("User not found");

        // Reuse token if already exists
        if (this.tokensByUserId.has(userId)) {
            return this.tokensByUserId.get(userId)!;
        }

        const token = `token-${++this.tokenCounter}`;
        this.tokensByUserId.set(userId, token);
        this.usersByToken.set(token, user);
        return token;
    }

    async getUser(username: string): Promise<Optionable<User>> {
        const user = this.usersByUsername.get(username);
        return user
            ?  new Optionable(user)
            : new Optionable(null) 
    }

    async getUserToken(username: string): Promise<Optionable<string>> {
        const user = this.usersByUsername.get(username);
        if (!user) return new Optionable(null);
        const token = this.tokensByUserId.get(user.id);
        return token
            ? new Optionable(token)
            : new Optionable(null) 

    }

    async getUserFromToken(token: string): Promise<Optionable<User>> {
        const user = this.usersByToken.get(token);
        return user
            ?  new Optionable(user)
            : new Optionable(null) 
    }

    // Optional helper to add users for testing
    addUser(user: User) {
        this.usersByUsername.set(user.username, user);
    }
}
