"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionService = void 0;
const assert_1 = __importDefault(require("assert"));
const nl_ktane_content_1 = require("nl-ktane-content");
const nl_ktane_lib_1 = require("nl-ktane-lib");
class MissionService {
    constructor() {
        this.missionPackIndex = new Map();
        for (const pack of nl_ktane_content_1.missionPacks)
            this.missionPackIndex.set(pack.name, pack);
        this.missionsListCache = Object.entries(nl_ktane_content_1.allMissions)
            .sort(([_id1, m1], [_id2, m2]) => (m1.sortKey ?? m1.name).toLowerCase() > (m2.sortKey ?? m2.name).toLowerCase() ? 1 : -1)
            .map(([id, mission]) => {
            const pack = this.missionPackIndex.get(mission.missionPack);
            (0, assert_1.default)(pack, `Mission pack not found: ${mission.missionPack} of ${mission.name}`);
            return {
                id,
                name: mission.name,
                pack,
                author: mission.author ?? pack.author ?? null,
                modules: (0, nl_ktane_lib_1.getMissionModulesCount)(mission),
                time: (0, nl_ktane_lib_1.getMissionTime)(mission),
                teamSolve: mission.completions?.some(c => (0, nl_ktane_lib_1.getSolveType)(c) === nl_ktane_lib_1.CompletionType.TEAM) || false,
                efmSolve: mission.completions?.some(c => (0, nl_ktane_lib_1.isEfmOrSoloSolve)(c)) ?? false,
                tpSolve: mission.solvedByTP || false,
                completers: (0, nl_ktane_lib_1.getMissionSolvers)(mission).size,
                complitions: (mission.completions ?? []).length,
            };
        });
    }
    getChallengeBombList() {
        return { count: this.missionsListCache.length, result: this.missionsListCache };
    }
    getChallengeBomb(id) {
        return nl_ktane_content_1.allMissions[id] ?? null;
    }
    getMissionPack(name) {
        return this.missionPackIndex.get(name) ?? null;
    }
}
exports.MissionService = MissionService;
//# sourceMappingURL=mission.service.js.map