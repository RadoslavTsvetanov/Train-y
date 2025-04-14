import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "trainy-frontend-web/env";
import { appRouter } from "trainy-frontend-web/server/api/root";
import { createTRPCContext } from "trainy-frontend-web/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
