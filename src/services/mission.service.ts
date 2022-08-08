import assert from "assert";
import { allMissions, missionPacks } from "nl-ktane-content";
import {
  CompletionType,
  getMissionModulesCount,
  getMissionSolvers,
  getMissionTime,
  getSolveType,
  isEfmOrSoloSolve,
  MissionInfo,
  MissionPack,
} from "nl-ktane-lib";

import { MissionListItemDTO } from "../dtos";

export class MissionService {
  private readonly missionPackIndex = new Map<string, MissionPack>();
  private readonly missionsListCache: MissionListItemDTO[];

  constructor() {
    for (const pack of missionPacks) this.missionPackIndex.set(pack.name, pack);
    this.missionsListCache = Object.entries(allMissions)
      .sort(([_id1, m1], [_id2, m2]) =>
        (m1.sortKey ?? m1.name).toLowerCase() > (m2.sortKey ?? m2.name).toLowerCase() ? 1 : -1,
      )
      .map(([id, mission]) => {
        const pack = this.missionPackIndex.get(mission.missionPack);
        assert(pack, `Mission pack not found: ${mission.missionPack} of ${mission.name}`);
        return {
          id,
          name: mission.name,
          pack,
          author: mission.author ?? pack.author ?? null,
          modules: getMissionModulesCount(mission),
          time: getMissionTime(mission),
          teamSolve: mission.completions?.some(c => getSolveType(c) === CompletionType.TEAM) || false,
          efmSolve: mission.completions?.some(c => isEfmOrSoloSolve(c)) ?? false,
          tpSolve: mission.solvedByTP || false,
          completers: getMissionSolvers(mission).size,
          complitions: (mission.completions ?? []).length,
        };
      });
  }

  public getChallengeBombList(): { count: number; result: MissionListItemDTO[] } {
    return { count: this.missionsListCache.length, result: this.missionsListCache };
  }

  public getChallengeBomb(id: string): MissionInfo | null {
    return (allMissions as any)[id] ?? null;
  }

  public getMissionPack(name: string): MissionPack | null {
    return this.missionPackIndex.get(name) ?? null;
  }
}
