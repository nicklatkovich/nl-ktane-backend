"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flag_madness = void 0;
exports.flag_madness = {
    name: "Flag Madness",
    missionPack: "DarkSly's Madness Pack",
    time: 120 * 60,
    strikes: 5,
    widgets: 5,
    completions: [
        {
            time: 45 * 60 + 2,
            log: "file=f49aa348a32b740f94b7d3c79c2cb564dcf15178;bomb=899JT5",
            completers: { defuser: "Edan", experts: ["Zefod"] },
        },
        { time: 43 * 60 + 13, log: "file=70aa7e1fa735d1ac3a21f55cc38f197d52002808;bomb=6U0RU2", completer: "ManiaMate" },
        {
            time: 24 * 60 + 46,
            vid: "https://www.youtube.com/watch?v=fpnFRrXFJz8",
            completers: { defuser: "Azzaman", experts: ["Puddle", "MageMage"] },
        },
        {
            time: 24 * 60 + 5,
            isFirst: true,
            log: "file=12e865b173f05ee091d541c5b3b35b83cc3bec05;bomb=SB8ES2",
            completer: "Edan",
        },
    ],
    modules: [
        [8, "britishSlang"],
        [5, "needyFlagIdentification"],
        [8, "FlagsModule"],
        [8, "MaritimeFlagsModule"],
        [8, "Semaphore"],
        [8, "vexillology"],
        [2, "SecurityCouncil"],
    ],
};
