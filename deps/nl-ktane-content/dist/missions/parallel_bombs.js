"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallel_bombs = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.parallel_bombs = {
    name: "Parallel Bombs",
    missionPack: "Flyer's Mission Pack",
    author: "Blananas",
    type: nl_ktane_lib_1.MissionType.STATIC,
    completions: [
        { time: 60 * 60 + 43, log: "file=b70b510ada23bea920c85c0056aaaa3c07347578;bomb=173CI6", completer: "LegendWilleh" },
        {
            time: 56 * 60 + 5,
            vid: "https://www.youtube.com/watch?v=WpSUMRNhlb4",
            completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel"] },
        },
        {
            time: 51 * 60 + 19,
            isFirst: true,
            vid: "https://www.youtube.com/watch?v=ou_EG8I7vXU&feature=youtu.be",
            completer: "Draket",
        },
        {
            time: 41 * 60 + 55,
            log: "file=98cc73d08c35d4acaea74de158fcd3506486be2b;bomb=LJ4RI0",
            completer: "aGood_Usernam3",
        },
        { time: 40 * 60 + 52, log: "file=5673ebbb49f856db08d206f4324ddc29f0f20b03;bomb=2P5SM5", completer: "Puddle" },
        {
            time: 35 * 60 + 41,
            vid: "https://www.youtube.com/watch?v=JFLlWfOpjsA",
            completers: { defuser: "Azzaman", experts: ["Dicey", "FcbdaBoss"] },
        },
        {
            time: 32 * 60 + 11,
            log: "file=1058256d3af5dfb9cdb4940454250d7d8a9f63ad;bomb=IK1XB5",
            completers: { defuser: "Zefod", experts: ["Edan"] },
        },
        { time: 31 * 60 + 45, log: "file=c343e85d448c060a7aa628a0e7537e5858885ebc;bomb=RI2EB8", completer: "ManiaMate" },
        {
            time: 28 * 60 + 58,
            vid: "https://youtu.be/RqCWoQ6lghE",
            completers: { defuser: "Danielstigman", experts: ["Asew", "Miki2003pl"] },
        },
        {
            time: 27 * 60 + 56,
            vid: "https://www.youtube.com/watch?v=adR71cV5OHc",
            completers: { defuser: "Deaf", experts: ["Fish", "Vincology"] },
        },
        { time: 21 * 60 + 58, log: "file=24fd3cf971619f695a7a9782218cac6800323049;bomb=467XQ0", completer: "Diffuse" },
        {
            time: 18 * 60 + 45,
            log: "file=af79a02b301abf7c4936cc8f29010fc1f0861bfb;bomb=EA5XU3",
            completers: { defuser: "Cookiepocalypse", experts: ["Garuda", "Millie-Rose"] },
        },
    ],
    solvedByTP: true,
    bombs: [
        {
            time: 120 * 60,
            strikes: 5,
            widgets: 5,
            modules: [
                "PianoKeys",
                "countdown",
                "GameOfLifeSimple",
                "Mastermind Simple",
                "MemoryV2",
                "DoubleOhModule",
                "Playfair",
                "TheHypercubeModule",
                "burglarAlarm",
                "switchModule",
                "ColoredSquaresModule",
                "orderedKeys",
                "CrazyTalk",
                "Backgrounds",
                "Simon",
                "Morse",
                "jukebox",
                "guitarChords",
                "Sink",
                "Logic",
                "BigButton",
                "Wires",
                "Maze",
                "Password",
                "harmonySequence",
                "FlavorText",
                "digitalRoot",
            ],
        },
        {
            time: 120 * 60,
            strikes: 5,
            widgets: 5,
            modules: [
                "CruelPianoKeys",
                "cruelCountdown",
                "GameOfLifeCruel",
                "Mastermind Cruel",
                "HexiEvilFMN",
                "CursedDoubleOhModule",
                "unfairCipher",
                "TheUltracubeModule",
                "burgerAlarm",
                "ColoredSwitchesModule",
                "DiscoloredSquaresModule",
                "reorderedKeys",
                "RegularCrazyTalkModule",
                "simonStores",
                "FaultyBackgrounds",
                "MorseV2",
                "festiveJukebox",
                "BrokenGuitarChordsModule",
                "FaultySink",
                "SuperlogicModule",
                "bamboozlingButton",
                "PerplexingWiresModule",
                "HexamazeModule",
                "ExtendedPassword",
                "melodySequencer",
                "FlavorTextCruel",
                "cruelDigitalRootModule",
            ],
        },
    ],
};