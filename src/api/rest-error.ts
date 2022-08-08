import { REST_STATUS } from "../constants";

export class RestError extends Error {
  static get NAME(): "RestError" {
    return "RestError";
  }

  public readonly status: REST_STATUS;
  public readonly details: unknown;

  constructor(message: string, props: { status?: REST_STATUS, details?: unknown } = {}) {
    super(message);
    this.status = props.status || REST_STATUS.INTERNAL_SERVER_ERROR;
    this.details = props.details;
    this.name = RestError.NAME;
  }
}
