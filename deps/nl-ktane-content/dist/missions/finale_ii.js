"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finale_ii = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.finale_ii = {
    name: "Finale II",
    missionPack: "Reach For The Stars Mission Pack",
    type: nl_ktane_lib_1.MissionType.STATIC,
    completions: [
        { time: 6 * 60 + 33, log: "file=0faac8ecfb8daef93b3f2fc265329e1f1aa702b6;bomb=IK5XS2", completer: "ManiaMate" },
        { time: 6 * 60 + 25, log: "file=25e5019548b972b1e07128ea90bd078d53ea59e7;bomb=E65MR4", completer: "Dicey" },
        {
            time: 4 * 60 + 29,
            isFirst: true,
            log: "file=fbdaca702f0daabe4b5e20711bc4268757a56b8e;bomb=HQ1RS3",
            completer: "LegendWilleh",
        },
    ],
    bombs: [
        {
            time: 60 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                "spwizAdventureGame",
                "alphabet",
                "BlackHoleModule",
                "BigButton",
                "CaesarCipherModule",
                "caesarCycle",
                "cube",
                "ExtendedPassword",
                "forgetThis",
                "geneticSequence",
                "labyrinth",
                "LEDEnc",
                "leftandRight",
                "moon",
                "Netherite",
                "Password",
                "GSPentabutton",
                "Playfair",
                "RedHerring",
                "ButtonV2",
                "Telepathy",
                "GSTellMeWhy",
                "vigenereCipher",
            ],
        },
        { time: 60 * 60, strikes: 1, widgets: 0, modules: ["timingIsEverything"] },
        {
            time: 60 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                "caesarCycle",
                "Chalices",
                "Color Decoding",
                "CursedDoubleOhModule",
                "digitString",
                "dumbWaiters",
                "ExtendedPassword",
                "forgetThis",
                "greatVoid",
                "hexabutton",
                "Mastermind Cruel",
                "matrix",
                "melodySequencer",
                "moon",
                "mortalKombat",
                "Netherite",
                "notCoordinates",
                "Playfair",
                "RedHerring",
                "shortcuts",
                "ButtonV2",
                "GSTellMeWhen",
                "V",
            ],
        },
    ],
};
