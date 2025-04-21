import { Elysia, t } from "elysia";
import { IAuth } from "../../modules/services/auth/interface";
import { Callback, ifNotNone, none } from "@custom-express/better-standard-library";
import { forums } from "./routes/forum";
import { auth } from "./routes/auth";
import { authenticationMiddleware } from "./middlewares/auth/authentication";
import { data } from "./routes/data";

const app = new Elysia()
  .use(authenticationMiddleware)
  .use(auth)
  .use(forums)
  .use(data)
  .get("/", () => "Welcome to the API")
  .listen(3000);

console.log(`🦊 Elysia server is running at http://localhost:3000`);
