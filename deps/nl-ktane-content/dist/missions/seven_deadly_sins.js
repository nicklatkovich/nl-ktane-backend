"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seven_deadly_sins = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.seven_deadly_sins = {
    name: "Seven Deadly Sins",
    missionPack: "Mr. Porcu's Challenging and Requested Missions",
    author: "PANOPTES",
    type: nl_ktane_lib_1.MissionType.FINITE,
    completions: [
        { time: 95 * 60 + 55, log: "file=1f939c6cb3f2c8f615141bb74dd54d4ee034ae95;bomb=S31SK1", completer: "LegendWilleh" },
        {
            time: 83 * 60 + 17,
            log: "file=ab53b42a2cb8873625c7936f61e746be980e509d;bomb=449VA2",
            completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
        },
        {
            time: 82 * 60 + 55,
            vid: "https://www.youtube.com/watch?v=uHI0C-EG8-Q",
            completers: { defuser: "Zefod", experts: ["Benjamin", "Burniel"] },
        },
        {
            time: 79 * 60,
            isFirst: true,
            vid: "https://www.youtube.com/watch?v=4SDPT19Z8NQ",
            completers: { defuser: "Deaf", experts: ["Edan", "Fish"] },
        },
        {
            time: 71 * 60 + 6,
            log: "file=a2b33c2de6c6abf1dd14ebe978e40d363cb3f447;bomb=SC4ML5",
            completer: "aGood_Usernam3",
        },
    ],
    bombs: [
        {
            time: 25 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                [2, "MemoryV2"],
                [5, "BigButton", "timeKeeper", "stopwatch", "ButtonV2", "plungerButton"],
            ],
        },
        { time: 25 * 60, strikes: 3, widgets: 5, modules: ["NeedyBeer", [7, "hangover", "iceCreamModule"]] },
        {
            time: 25 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                [2, "SplittingTheLootModule"],
                [5, "SplittingTheLootModule", "jewelVault", "burglarAlarm", "LionsShareModule"],
            ],
        },
        {
            time: 25 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                [2, "cube"],
                [5, "monsplodeWho", "KritCMDPrompt", "rapidButtons", "needyMrsBob", "spwizTetris"],
            ],
        },
        {
            time: 25 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                [2, "SimonScreamsModule", "SimonShrieksModule"],
                [5, "Simon", "SimonV2", "SimonScreamsModule", "SimonShrieksModule", "SimonSendsModule"],
            ],
        },
        { time: 10 * 60, strikes: 3, widgets: 5, modules: [[7, "poetry"]] },
        {
            time: 5 * 60,
            strikes: 3,
            widgets: 5,
            modules: [
                [
                    7,
                    "Wires",
                    "BigButton",
                    "Keypad",
                    "Simon",
                    "WhosOnFirst",
                    "Memory",
                    "Morse",
                    "Venn",
                    "WireSequence",
                    "Maze",
                    "Password",
                ],
            ],
        },
    ],
};
