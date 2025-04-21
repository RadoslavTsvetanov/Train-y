import { error } from "elysia";
import { IAuth } from "../../../modules/services/auth/interface";



function isAuthorizedBase(v: { token: string, id: string }, getUserToken: (id: string) => string) {
    if (getUserToken(v.id) !== v.token) {
        return error(403)
    }
}

export const isAuthorizedSimple = (v: { token: string, id: string }) => {
    return isAuthorizedBase(v, () => v.id)
}