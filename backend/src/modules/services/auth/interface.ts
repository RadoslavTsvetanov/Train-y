import { Optionable } from "@custom-express/better-standard-library"
import { id } from "../../../types/id"
import { User } from "@prisma/client"

export interface IAuth {
    //Intended behaviour if the token does not exist return false to simplify working with this  service
    isUserAlreadyConnected(token: string): Promise<boolean>
    grantToken(userId: id): Promise<string>
    getUser(username: string): Promise<Optionable<User>>
    getUserToken(username: string): Promise<Optionable<string>>
    getUserFromToken(token: string): Promise<Optionable<User>>
}