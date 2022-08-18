"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.morse_madness = void 0;
exports.morse_madness = {
    name: "Morse Madness",
    missionPack: "DarkSly's Madness Pack",
    time: 90 * 60,
    strikes: 4,
    widgets: 5,
    completions: [
        {
            time: 16 * 60 + 22,
            log: "file=4fddc4d57da6cedc9fe2c478c9ad35e696d395dd;bomb=MA0MW6",
            completers: { defuser: "Edan", experts: ["Deaf", "Fish"] },
        },
        { time: 14 * 60 + 12, isFirst: true, vid: "https://www.youtube.com/watch?v=GJEnM02dGdM", completer: "Benjamin" },
        { time: 11 * 60 + 3, log: "file=68b3a6a122f0c5408ac96e28f131ad7220c3f30a;bomb=1V7XS8", completer: "LegendWilleh" },
        { time: 4 * 60 + 57, log: "file=378235e3514ab2fc88b1a7dbed5c7fc4bba20723;bomb=6X3BQ6", completer: "ManiaMate" },
        {
            time: 4 * 60 + 42,
            log: "file=4cc5f436ecce02320a9a1b5b5011f7821c9ace1c;bomb=II4FB5",
            completer: "aGood_Usernam3",
        },
    ],
    modules: [
        [2, "lgndAudioMorse"],
        [3, "BasicMorse"],
        [4, "ColorMorseModule"],
        [2, "EncryptedMorse"],
        [3, "MorseAMaze"],
        "morseButtons",
        [7, "Morse"],
        [3, "lgndMorseIdentification"],
        [2, "MorseV2"],
        [5, "MorseWar"],
        [3, "NotMorseCode"],
        [3, "reverseMorse"],
        [3, "semamorse"],
        [2, "transmittedMorseModule"],
        "SimonSendsModule",
        "Averageh",
        [2, "goofysgame"],
    ],
};
