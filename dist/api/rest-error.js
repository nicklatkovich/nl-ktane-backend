"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestError = void 0;
const constants_1 = require("../constants");
class RestError extends Error {
    constructor(message, props = {}) {
        super(message);
        this.status = props.status || constants_1.REST_STATUS.INTERNAL_SERVER_ERROR;
        this.details = props.details;
        this.name = RestError.NAME;
    }
    static get NAME() {
        return "RestError";
    }
}
exports.RestError = RestError;
//# sourceMappingURL=rest-error.js.map