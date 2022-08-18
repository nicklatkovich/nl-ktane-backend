"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionAuthorToString = void 0;
const mission_packs_1 = require("./mission-packs");
function strOrStrArrToString(value) {
    return typeof value === "string" ? value : value.join(" & ");
}
function missionAuthorToString(mission) {
    if (mission.author)
        return strOrStrArrToString(mission.author);
    const pack = mission_packs_1.missionPacks.find(pack => pack.name === mission.missionPack);
    if (!pack)
        return "???";
    return strOrStrArrToString(pack.author);
}
exports.missionAuthorToString = missionAuthorToString;
