import { MissionInfo } from "nl-ktane-lib";
export declare function validateMissions(props: {
    missions?: {
        [key: string]: MissionInfo;
    };
    findUnsolved?: boolean;
}): void;
