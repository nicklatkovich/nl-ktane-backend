"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApi = void 0;
const cors_1 = __importDefault(require("@koa/cors"));
const config_1 = require("config");
const koa_1 = __importDefault(require("koa"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const util_1 = require("util");
const constants_1 = require("../constants");
const rest_error_1 = require("./rest-error");
const routes_1 = require("./routes");
function initRouter() {
    const router = new koa_router_1.default();
    for (const path of Object.keys(routes_1.routes)) {
        router.get(path, async (ctx) => {
            try {
                const result = await routes_1.routes[path](ctx);
                ctx.status = constants_1.REST_STATUS.OK;
                ctx.body = { status: constants_1.REST_STATUS.OK, result };
                return;
            }
            catch (error) {
                if (error instanceof rest_error_1.RestError) {
                    ctx.status = error.status;
                    ctx.body = { status: error.status, error: error.message, details: error.details };
                    return;
                }
                console.error("REST ERROR");
                console.error(error instanceof Error ? error : (0, util_1.inspect)(error, false, null, true));
                ctx.status = constants_1.REST_STATUS.INTERNAL_SERVER_ERROR;
                ctx.body = { status: constants_1.REST_STATUS.INTERNAL_SERVER_ERROR, error: "Internal server error" };
            }
        });
    }
    return router;
}
async function startApi() {
    const app = new koa_1.default();
    app.use((0, cors_1.default)());
    app.use(async (ctx, next) => {
        console.log(ctx.request.path);
        if (!/^\/static(\/.*?)$/.test(ctx.request.path) &&
            !/^\/api(\/.*)?$/.test(ctx.request.path) &&
            ctx.request.path !== "/favicon.ico") {
            ctx.request.path = "/";
        }
        await next();
    });
    const staticPages = new koa_1.default();
    staticPages.use((0, koa_static_1.default)("deps/nl-ktane-frontend/build"));
    app.use((0, koa_mount_1.default)("/", staticPages));
    const api = new koa_1.default();
    api.use(initRouter().routes());
    api.use(ctx => {
        ctx.status = constants_1.REST_STATUS.METHOD_NOT_ALLOWED;
        ctx.body = { status: constants_1.REST_STATUS.METHOD_NOT_ALLOWED, error: "Method not allowed" };
    });
    app.use((0, koa_mount_1.default)("/api/v1", api));
    await new Promise(resolve => app.listen(config_1.PORT, () => resolve()));
    console.log(`API started on http://localhost:${config_1.PORT}`);
}
exports.startApi = startApi;
//# sourceMappingURL=index.js.map