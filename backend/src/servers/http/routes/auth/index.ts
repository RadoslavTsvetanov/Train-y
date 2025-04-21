import { Callback, none } from "@custom-express/better-standard-library";
import Elysia, { t } from "elysia";
import { IAuth } from "../../../../modules/services/auth/interface";


function provideServices(): {
  auth: IAuth
} {
    return {
        
    }
}



function Try<V, IfNoneReturn, IfNotNotNoneReturn> /* casing is like this since try is reserved word */(v: V | none, config: {
  ifNone: () => IfNoneReturn,
  ifNotNone: Callback<IfNotNotNoneReturn, V>
}): IfNoneReturn | IfNotNotNoneReturn {
  if (v === undefined || v === null) {
    return config.ifNone()
  }
  return config.ifNotNone(v)
}


export const auth = new Elysia({ prefix: "/auth" })
  .state({ services: provideServices() })
  .post(
    "/login",
    async ({ store: { services }, body, set }) => {
      let token: string = "";
      (await services.auth.getUser(body.name)).ifCanBeUnpacked(async v => {
        token = await services.auth.grantToken(v.id)
      })
      return Try(
        token === "" ? null : token,
        {
          ifNone: () => {
            set.status = 403
           },
          ifNotNone: v => {
            set.status = 200
            return token
          }
        }
      ) 
    },
    {
      body: t.Object({
        name: t.String(),
        egn: t.String()
      })
    }
  )
  .post(
    "/register", 
    ({ store, body }) => "Register route", 
      {
          body: t.Object({ hi: t.String() })
      }
) 