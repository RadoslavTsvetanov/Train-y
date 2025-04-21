import Elysia from "elysia";
import { IAuth } from "../../../../modules/services/auth/interface";
import { map } from "@custom-express/better-standard-library";


function provideContext(): {services: {auth: IAuth}}
export const authorizationMiddleware = new Elysia()
.state(provideContext())
  .onRequest(({ request, set, store }) => {
      map(request.headers.get("authorization"), token => {
        store.services.auth.getUserToken()
    }) 
  });