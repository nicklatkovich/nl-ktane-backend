import cors from "@koa/cors";
import { PORT } from "config";
import Koa from "koa";
import Router from "koa-router";
import { inspect } from "util";

import { REST_STATUS } from "../constants";
import { RestError } from "./rest-error";
import { routes } from "./routes";

function initRouter() {
  const router = new Router({ prefix: "/api/v1" });
  for (const path of Object.keys(routes)) {
    router.get(path, async (ctx) => {
      try {
        const result = await routes[path](ctx);
        ctx.status = REST_STATUS.OK;
        ctx.body = { status: REST_STATUS.OK, result };
        return;
      } catch (error) {
        if (error instanceof RestError) {
          ctx.status = error.status;
          ctx.body = { status: error.status, error: error.message, details: error.details };
          return;
        }
        console.error("REST ERROR");
        console.error(error instanceof Error ? error : inspect(error, false, null, true));
        ctx.status = REST_STATUS.INTERNAL_SERVER_ERROR;
        ctx.body = { status: REST_STATUS.INTERNAL_SERVER_ERROR, error: "Internal server error" };
      }
    });
  }
  return router;
}

export async function startApi() {
  const app = new Koa();
  app.use(cors());
  app.use(initRouter().routes());
  app.use((ctx) => {
    ctx.status = REST_STATUS.METHOD_NOT_ALLOWED;
    ctx.body = { status: REST_STATUS.METHOD_NOT_ALLOWED, error: "Method not allowed" };
  });
  await new Promise<void>((resolve) => app.listen(PORT, () => resolve()));
  console.log(`API started on http://localhost:${PORT}`);
}
