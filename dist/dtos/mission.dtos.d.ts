import { ElOrArr, MissionPack } from "nl-ktane-lib";
export interface MissionListItemDTO {
    id: string;
    name: string;
    pack: MissionPack;
    author: ElOrArr<string> | null;
    modules: number;
    time: number;
    teamSolve: boolean;
    efmSolve: boolean;
    tpSolve: boolean;
    completers: number;
    complitions: number;
}
