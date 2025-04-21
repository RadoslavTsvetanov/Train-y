import Elysia, { error, t } from "elysia";
import { IForumsService } from "../../../../modules/services/forum/interface";
import { IAuth } from "../../../../modules/services/auth/interface";
import { map } from "@custom-express/better-standard-library";
import { isAuthorizedSimple } from "../../hooks/autorizations";

function provideContext(): {services: {forum: IForumsService, auth: IAuth}} {
  return {}
}

export const forums = new Elysia({ prefix: "/forums" })
  .state(provideContext())
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
    beforeHandle(v) { // TODO: extract into reusable component where you just add the thing that should be intreptredted as id 
    //     let result: "" | "none" = "" as "" | "none // a bit dumb refactor it "
    //   // TODO make it so that middleware adds it to context
    //   map(v.request.headers.get("authorization"), async token => {

    //     map(await v.store.services.auth.getUserFromToken(token as string), r => {
    //       r.ifNone(() => result = "none")
    //     })
    //   })
    //   if (result === "none") {
    //     return error(403)
      // }
      return isAuthorizedSimple({token: token, id: v.body.userId})
    },
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
      store.services.forum.create(body.isVoting ? "voting" : "normal")
    }
  }, {
    body: t.Object({
      name: t.String(),
      isVoting: t.Boolean()
    })
  })
