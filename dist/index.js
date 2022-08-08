"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const util_1 = require("util");
const api_1 = require("./api");
async function main() {
    await (0, api_1.startApi)();
}
exports.main = main;
main().catch((error) => {
    console.error(error);
    console.error(error instanceof Error ? error : (0, util_1.inspect)(error, false, null, true));
    process.exit(error.status || 1);
});
//# sourceMappingURL=index.js.map