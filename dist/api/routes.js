"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const constants_1 = require("../constants");
const services_1 = require("../services");
const rest_error_1 = require("./rest-error");
exports.routes = {
    "/mission/list": () => services_1.Services.mission.getChallengeBombList(),
    "/mission/:id": ({ params }) => {
        const { id } = params;
        const result = services_1.Services.mission.getChallengeBomb(id);
        if (!result)
            throw new rest_error_1.RestError("Mission not found", { status: constants_1.REST_STATUS.NOT_FOUND, details: { id } });
        const missionPack = services_1.Services.mission.getMissionPack(result.missionPack);
        if (!missionPack)
            throw new Error("Mission pack not found");
        return { ...result, missionPack };
    },
};
//# sourceMappingURL=routes.js.map