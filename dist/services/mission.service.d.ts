import { MissionInfo, MissionPack } from "nl-ktane-lib";
import { MissionListItemDTO } from "../dtos";
export declare class MissionService {
    private readonly missionPackIndex;
    private readonly missionsListCache;
    constructor();
    getChallengeBombList(): {
        count: number;
        result: MissionListItemDTO[];
    };
    getChallengeBomb(id: string): MissionInfo | null;
    getMissionPack(name: string): MissionPack | null;
}
