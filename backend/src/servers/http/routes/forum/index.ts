import Elysia, { error, t } from "elysia";
import { IForumsService } from "../../../../modules/services/forum/interface";
import { IAuth } from "../../../../modules/services/auth/interface";
import { map } from "@custom-express/better-standard-library";
import { isAuthorizedSimple } from "../../hooks/autorizations";
import { InMemoryForumsService } from "../../../../modules/services/forum/implemetations/inMemory";
import { InMemoryAuthService } from "../../../../modules/services/auth/implementations/inMemory";

function provideContext(): {services: {forum: IForumsService, auth: IAuth}} {
  return {services: {forum : new InMemoryForumsService,auth: new InMemoryAuthService()} }
}

export const forums = new Elysia({ prefix: "/forums" })
  .state(provideContext())
  .derive(({ request }) => {
    return {
    token: request.headers.get("authorization")
  }})
  .post(
    "/:id",
    async ({ params, store, token, body }) => {
    const forum = await store.services.forum.get(params.id)
    if(forum.is_none()){
      return error(404, "no forum with this id exists") 
    }
    forum.ifCanBeUnpacked(v => store.services.forum.addMessageToForum({
      forumId: params.id,
      messageData: {
        creatorId: body.userId,
        content: body.message
      }
    }))

      return 200
   }, {
    body: t.Object({
      userId: t.String(),
      message: t.String()
    })
  })
  .get("/:id", async ({ params, store }) => {
    return (await store.services.forum.get(params.id)).try({
      ifNone: () => error(404, "no forum with this id exists"),
      ifNotNone: v => v
    })
  })
  .post("/new", ({ body, store }) => {
    if (body.isVoting) {
      store.services.forum.create(body.isVoting ? "voting" : "normal", body.title)
    }
  }, {
    body: t.Object({
      name: t.String(),
      isVoting: t.Boolean(),
      title: t.String()
    })
  })
