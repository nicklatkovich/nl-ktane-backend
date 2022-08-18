"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.series_of_similarities = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.series_of_similarities = {
    name: "Series Of Similarities",
    missionPack: "Burniel's Bombs",
    type: nl_ktane_lib_1.MissionType.FINITE_G_TIME,
    time: 90 * 60,
    completions: [
        { time: 33 * 60 + 5, log: "file=9e60795965e39cf0e8d14e30519b178b8177f42e;bomb=JU9UM4", completer: "LegendWilleh" },
        {
            time: 24 * 60 + 56,
            isFirst: true,
            vid: "https://www.youtube.com/watch?v=HDSzazJyuJY&feature=youtu.be",
            completer: "Draket",
        },
        { time: 23 * 60 + 45, log: "file=7acc338e487a1abe947683a71f468e4c2c0c4079;bomb=DF9ZI2", completer: "Ugh_Sunlight" },
        {
            time: 23 * 60 + 33,
            vid: "https://www.youtube.com/watch?v=z_ufAUCW5NA",
            completers: { defuser: "Danielstigman", experts: ["Puddle", "Miki2003pl"] },
        },
        { time: 18 * 60 + 27, log: "file=fb1c3cdbedbd580d3be86ec62633615ff04b3f90;bomb=184KJ7", completer: "Dicey" },
        {
            time: 14 * 60 + 49,
            vid: "https://www.youtube.com/watch?v=r9tahFea2aQ",
            completers: { defuser: "Zaakeil", experts: ["KittyAshy", "Ulv"] },
        },
        { time: 12 * 60 + 18, log: "file=c0fc9859cb5fe7ae1f5bdb08734a36b5a491bc3e;bomb=RC1QM2", completer: "ManiaMate" },
        {
            time: 9 * 60 + 34,
            vid: "https://www.youtube.com/watch?v=d0Mo4kME-vc",
            completers: { defuser: "Zefod", experts: ["Burniel", "Fish"] },
        },
        {
            time: 8 * 60 + 42,
            log: "file=d48317c052d789c4325d658894f0bdf14b72cc75;bomb=G66QK6",
            completer: "Cookiepocalypse",
        },
        { time: 5 * 60 + 19, log: "file=7611366be16561ead66284ab128b08ea56a621ec;bomb=A35LE6", completer: "Vincology" },
        { time: 2 * 60 + 49, log: "file=3fb876ecc94adae1311924ee4077ea55858c5fec;bomb=WS0VE4", completer: "Garuda" },
        {
            time: 2 * 60 + 28,
            log: "file=3cb3797acf67cb8a63b2e7e632d4661ce8ae1bb3;bomb=GP9GQ1",
            completers: { defuser: "SkipzPlays", experts: ["Lily", "Sierra"] },
        },
    ],
    bombs: [
        {
            strikes: 3,
            widgets: 5,
            modules: ["FollowTheLeaderModule", "NotWiresword", "riskyWires", "sevenWires", "skinnyWires", "wire", "Wires"],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "bamboozlingButton",
                "BigButton",
                "hexabutton",
                "logicalButtonsModule",
                "NotButton",
                "plungerButton",
                "rapidButtons",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "BooleanKeypad",
                "complexKeypad",
                "Keypad",
                "kookyKeypadModule",
                "NotKeypad",
                "KeypadV2",
                "symbolicPasswordModule",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "simonSamples",
                "Simon",
                "SimonScreamsModule",
                "simonSelectsModule",
                "SimonSingsModule",
                "SimonV2",
                "simonsStages",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "BrokenButtonsModule",
                "CrazyTalk",
                "Detonato",
                "RegularCrazyTalkModule",
                "tWords",
                "ThirdBase",
                "WhosOnFirst",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "DiscoloredSquaresModule",
                "FlashMemory",
                "MemoryV2",
                "horribleMemory",
                "MadMemory",
                "Memory",
                "NotMemory",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: ["ColorMorseModule", "EncryptedMorse", "Morse", "MorseWar", "MorseAMaze", "MorseV2", "reverseMorse"],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "Venn",
                "NotComplicatedWires",
                "forgetThemAll",
                "PerplexingWiresModule",
                "wireSpaghetti",
                "WirePlacementModule",
                "WireSequence",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: ["spwiz3DMaze", "BlindMaze", "HexamazeModule", "Maze", "mazematics", "NotMaze", "PolyhedralMazeModule"],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: ["CryptModule", "HexiEvilFMN", "ExtendedPassword", "NotPassword", "Password", "Playfair", "PasswordV2"],
        },
    ],
};
