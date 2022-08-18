"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crescendo = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.crescendo = {
    name: "Crescendo",
    missionPack: "Thicc Bombs",
    type: nl_ktane_lib_1.MissionType.FINITE_G_TIME,
    time: 76 * 60,
    completions: [
        { time: 18 * 60 + 19, vid: "https://www.youtube.com/watch?v=2b--b4MgXMg", completer: "LegendWilleh" },
        {
            time: 14 * 60 + 37,
            log: "file=9bd910654c02d1906a9de95ff5bbfdaa7713f95b;bomb=VP2DE4",
            completers: { defuser: "Cookiepocalypse", experts: ["KittyAshy", "Zaakeil"] },
        },
        {
            time: 13 * 60 + 59,
            log: "file=0d9e40c5d147a0ca147b38e9a4451b38e03ac5be;bomb=EK9IT5",
            completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
        },
        { time: 8 * 60 + 49, vid: "https://www.youtube.com/watch?v=5GFQ9dJ7iKk", completer: "tandyCake" },
        {
            time: 7 * 60 + 23,
            vid: "https://youtu.be/egtke2ctGSM",
            completers: { defuser: "Orinami", experts: ["Lily", "Millie-Rose"] },
        },
        {
            time: 5 * 60 + 14,
            isFirst: true,
            log: "file=9be1ea9d67435f618945bcbca1758bbaa7633695;bomb=TZ7NR0",
            completer: "Crazycaleb",
        },
        {
            time: 4 * 60 + 30,
            vid: "https://www.youtube.com/watch?v=A2CNBfH3EM4",
            completers: { defuser: "Dicey", experts: ["Garuda", "mcd"] },
        },
        {
            time: 4 * 60 + 19,
            vid: "https://www.youtube.com/watch?v=SPDBU7ss37Q",
            completers: { defuser: "Deaf", experts: ["aGood_Usernam3", "Fish"] },
        },
        { time: 3 * 60 + 28, vid: "https://www.youtube.com/watch?v=rI1lz8IsDmU", completer: "Vincology" },
        {
            time: 3 * 60 + 25,
            log: "file=2bccd230d0a469e2fa475bc4d490aa2711a2698a;bomb=468TM3",
            completer: "Cookiepocalypse",
        },
        { time: 38, log: "file=6d5a18b534fb1410b8ac9a2d0b7a6a6b52975240;bomb=PA0FQ0", completer: "Burniel" },
    ],
    bombs: [
        {
            strikes: 1,
            widgets: 0,
            modules: [
                "forgetItNot",
                "Mastermind Simple",
                "AppreciateArt",
                "luckyDice",
                "MistakeModule",
                "countdown",
                "coloredMaze",
                "toolneedy",
                "Ultralogic",
                "Wires",
                "Simon",
            ],
        },
        {
            strikes: 2,
            widgets: 1,
            modules: [
                "forgetThis",
                "TwoBits",
                "PianoKeys",
                "riskyWires",
                "BlindAlleyModule",
                "kikiNumberWang",
                "MazeScrambler",
                "literallyNothing",
                "SimonV2",
                "Venn",
                "SuperlogicModule",
            ],
        },
        {
            strikes: 3,
            widgets: 2,
            modules: [
                "forgetInfinity",
                "Mastermind Cruel",
                "FestivePianoKeys",
                "KritBlackjack",
                "polygons",
                "catchphrase",
                "Maze",
                "MotionSense",
                "simonsStar",
                "WirePlacementModule",
                "Logic",
            ],
        },
        {
            strikes: 4,
            widgets: 3,
            modules: [
                "MemoryV2",
                "qFunctions",
                "melodySequencer",
                "YahtzeeModule",
                "tapCode",
                "OnlyConnectModule",
                "OneDimensionalMaze",
                "NeedyBeer",
                "SimonScreamsModule",
                "skinnyWires",
                "logicGates",
            ],
        },
        {
            strikes: 5,
            widgets: 4,
            modules: [
                "forgetMeLater",
                "Jailbreak",
                "CruelPianoKeys",
                "Poker",
                "BrailleModule",
                "cruelCountdown",
                "HexamazeModule",
                "NeedyVentGas",
                "SimonShrieksModule",
                "WireSequence",
                "logicalButtonsModule",
            ],
        },
        {
            strikes: 6,
            widgets: 5,
            modules: [
                "HexiEvilFMN",
                "malfunctions",
                "SimonSingsModule",
                "SillySlots",
                "punctuationMarks",
                "crystalMaze",
                "PolyhedralMazeModule",
                "NeedyKnob",
                "SimonSendsModule",
                "wire",
                "arithmelogic",
            ],
        },
    ],
};