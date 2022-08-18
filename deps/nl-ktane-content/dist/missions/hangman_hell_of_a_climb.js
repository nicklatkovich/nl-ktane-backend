"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hangman_hell_of_a_climb = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.hangman_hell_of_a_climb = {
    name: "Hangman Hell of a Climb",
    missionPack: "Move Along",
    type: nl_ktane_lib_1.MissionType.FINITE_G_TIME_STRIKES,
    time: 64 * 60,
    strikes: 4,
    completions: [
        {
            time: 17 * 60 + 57,
            isFirst: true,
            log: "file=3fbd24d2ce4c3cf56b747be57f27fa5a4023b2fe;bomb=VV6QR7",
            completer: "Edan",
        },
    ],
    bombs: [
        { widgets: 5, modules: ["encryptedHangman", "X01"] },
        { widgets: 5, modules: ["encryptedHangman", "xo", "goModule"] },
        { widgets: 5, modules: ["encryptedHangman", "ZooModule", "pieModule", "SetModule"] },
        { widgets: 5, modules: ["encryptedHangman", "qSwedishMaze", "lgndZoni", "Sink", "Maze"] },
        {
            widgets: 5,
            modules: ["encryptedHangman", "ChessModule", "FlagsModule", "masyuModule", "KanjiModule", "MafiaModule"],
        },
        {
            widgets: 5,
            modules: ["encryptedHangman", "HitmanModule", "phones", "murder", "MayhemModule", "mirror", "poetry"],
        },
        {
            widgets: 5,
            modules: ["encryptedHangman", "Bowling", "tenpins", "kataBurnout", "fishing", "fursona", "popufur", "mwisort"],
        },
        {
            widgets: 5,
            modules: [
                "encryptedHangman",
                "AquariumModule",
                "CrittersModule",
                "GridlockModule",
                "HexamazeModule",
                "gyromaze",
                "quilting",
                "Tangrams",
                "Painting",
            ],
        },
        {
            widgets: 5,
            modules: [
                "encryptedHangman",
                "krazzBlaseball",
                "GSCorridors",
                "diffusion",
                "metamorse",
                "xtrpasscodes",
                "Telepathy",
                "spwizAstrology",
                "candyLand",
                "longBeans",
            ],
        },
    ],
};
