"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logic_madness = void 0;
exports.logic_madness = {
    name: "Logic Madness",
    missionPack: "DarkSly's Madness Pack",
    time: 110 * 60,
    strikes: 5,
    widgets: 5,
    completions: [
        {
            time: 48 * 60 + 10,
            isFirst: true,
            log: "file=0bb57fa569fecd81e9b8425d41942bd6af199dac;bomb=LM3EF7",
            completer: "LegendWilleh",
        },
        {
            time: 47 * 60 + 45,
            vid: "https://www.youtube.com/watch?v=_XWe3qqwtHw&feature=youtu.be",
            completer: "GreenPower",
        },
        {
            time: 44 * 60 + 36,
            vid: "https://www.youtube.com/watch?v=MZfaKJvnv2Y",
            completers: { defuser: "Miki2003pl", experts: ["Danielstigman"] },
        },
        {
            time: 32 * 60 + 29,
            vid: "https://www.youtube.com/watch?v=y_xWyebdGCE",
            completers: { defuser: "KittyAshy", experts: ["Zaakeil"] },
        },
        {
            time: 19 * 60 + 6,
            log: "file=d669bb102cab1f7bc72bf129e6c1e95eee86823d;bomb=287QE4",
            completers: { defuser: "ManiaMate", experts: ["Fish"] },
        },
        { time: 18 * 60 + 15, log: "file=0f69b406e48ba7151cf35f0e447d3afa46f4b425;bomb=6Q5UW1", completer: "Lone" },
    ],
    modules: [
        "ANDmodule",
        [3, "arithmelogic"],
        [3, "BooleanKeypad"],
        [3, "boolMaze"],
        [6, "booleanVennModule"],
        [3, "booleanWires"],
        [2, "boolMazeCruel"],
        [3, "Logic"],
        [3, "logicalButtonsModule"],
        [3, "logicalOperators"],
        [3, "logicGates"],
        "logicStatement",
        [3, "NotComplicatedWires"],
        "rgbLogic",
        [3, "SuperlogicModule"],
        [3, "Ultralogic"],
        [3, "BitOps"],
    ],
};
