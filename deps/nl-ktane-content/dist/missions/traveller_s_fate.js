"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traveller_s_fate = void 0;
const nl_ktane_lib_1 = require("nl-ktane-lib");
exports.traveller_s_fate = {
    name: "Traveller's Fate",
    missionPack: "Reach For The Stars Mission Pack",
    type: nl_ktane_lib_1.MissionType.FINITE_G_TIME,
    time: 100 * 60,
    completions: [
        {
            time: 43 * 60 + 39,
            isFirst: true,
            log: "file=367b515c0fabdb497c97930783c002132bfd5426;bomb=VU4GA7",
            completer: "LegendWilleh",
        },
        {
            time: 15 * 60 + 15,
            log: "file=45e71f77bdf1eda64aa8c3b8d5511a5e623433bb;bomb=BI6MP7",
            completers: { defuser: "Garuda", experts: ["Cookiepocalypse", "Fish"] },
        },
    ],
    bombs: [
        {
            strikes: 4,
            widgets: 5,
            modules: [
                "NeedyKnob",
                "BattleshipModule",
                "blockbusters",
                "ChessModule",
                "ingredients",
                "keypadLock",
                "Logic",
                "NotKeypad",
                "theNumber",
                "spwizPerspectivePegs",
                "pigpenCycle",
                [
                    10,
                    "BattleshipModule",
                    "blockbusters",
                    "ChessModule",
                    "ingredients",
                    "keypadLock",
                    "Logic",
                    "NotKeypad",
                    "theNumber",
                    "spwizPerspectivePegs",
                    "pigpenCycle",
                ],
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "ksmAmazeingButtons",
                "caesarCyclePL",
                "lgndColoredKeys",
                "CrackboxModule",
                "FlagsModule",
                "HexamazeModule",
                "instructions",
                "MouseInTheMaze",
                "NotButton",
                "NotMaze",
                "NotSimaze",
                "PolyhedralMazeModule",
                "reverseMorse",
                "SuperlogicModule",
                "YahtzeeModule",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "AdjacentLettersModule",
                "Backgrounds",
                "brushStrokes",
                "burglarAlarm",
                "challengeAndContact",
                "colormath",
                "CruelBinary",
                "CruelPianoKeys",
                "digitalDials",
                "GameOfLifeCruel",
                "MinesweeperModule",
                "RegularCrazyTalkModule",
                "sequencesModule",
                "sphere",
                "UncoloredSquaresModule",
                "VaricoloredSquaresModule",
                "wastemanagement",
            ],
        },
        {
            strikes: 3,
            widgets: 5,
            modules: [
                "spwiz3DMaze",
                "algebra",
                "BitmapsModule",
                "TheClockModule",
                "CrazyTalk",
                "DNAMutation",
                "DateFinder",
                "Logic",
                "melodySequencer",
                "moon",
                "NotComplicatedWires",
                "NotTimerModule",
                "PurgatoryModule",
                "xelQuickTimeEvents",
                "PasswordV2",
                "simonsStages",
                "ButtonV2",
                "stopwatch",
                "sun",
                "BigSwitch",
                "synonyms",
                "timeKeeper",
                "timezone",
            ],
        },
    ],
};