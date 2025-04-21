import Elysia from "elysia";

function provideContext(): {
  services: {  };
} {
  return {};
}

export const profile = new Elysia({ prefix: "/forums" })
    .state(provideContext())
    .get(
        "/:id",
        v => {

        }
    )