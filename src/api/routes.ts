import Koa from "koa";

import { REST_STATUS } from "../constants";
import { Services } from "../services";
import { RestError } from "./rest-error";

export const routes: { readonly [url: string]: (ctx: Koa.ParameterizedContext) => any } = {
  "/mission/list": () => Services.mission.getChallengeBombList(),
  "/mission/:id": ({ params }) => {
    const { id } = params;
    const result = Services.mission.getChallengeBomb(id);
    if (!result) throw new RestError("Mission not found", { status: REST_STATUS.NOT_FOUND, details: { id } });
    const missionPack = Services.mission.getMissionPack(result.missionPack);
    if (!missionPack) throw new Error("Mission pack not found");
    return { ...result, missionPack };
  },
};
