import Elysia from "elysia";
import { InMemoryAuthService } from "../../../../modules/services/auth/implementations/inMemory";

export const authenticationMiddleware = new Elysia()
  .onRequest(({ request, set }) => {
  const auth = request.headers.get("authorization");
  if (!auth || auth !== "Bearer secret") {
    set.status = 401;
    return "Unauthorized";
  }
})
  .derive({ as: 'global' }, ({ request }) => {
    const auth = request.headers.get("authorization");
    const token = auth!.substring(7) 
    
    return { token };
  });