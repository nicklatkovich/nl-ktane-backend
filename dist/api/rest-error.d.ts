import { REST_STATUS } from "../constants";
export declare class RestError extends Error {
    static get NAME(): "RestError";
    readonly status: REST_STATUS;
    readonly details: unknown;
    constructor(message: string, props?: {
        status?: REST_STATUS;
        details?: unknown;
    });
}
