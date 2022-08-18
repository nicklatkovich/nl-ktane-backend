"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMissions = void 0;
const allMissions = __importStar(require("./all-missions"));
function validateMissions(props) {
    const missions = props.missions ?? allMissions;
    const findUnsolved = props.findUnsolved ?? false;
    const errors = [];
    const warnings = [];
    for (const missionId of Object.keys(missions)) {
        const mission = missions[missionId];
        const firstSolvesCount = (mission.completions?.filter(c => c.isFirst) || []).length;
        if (firstSolvesCount > 1)
            errors.push(`"${mission.name}" has more than 1 first solve`);
        else if (mission.completions && firstSolvesCount < 1)
            warnings.push(`"${mission.name}" has no first solve`);
        if (findUnsolved && !mission.completions)
            warnings.push(`"${mission.name}" has no solves`);
    }
    if (errors.length > 0)
        console.error(`ERRORS:\n\t${errors.join("\n\t")}`);
    if (warnings.length > 0)
        console.warn(`WARNINGS:\n\t${warnings.join("\n\t")}`);
}
exports.validateMissions = validateMissions;
if (require.main === module)
    validateMissions({ findUnsolved: true });
