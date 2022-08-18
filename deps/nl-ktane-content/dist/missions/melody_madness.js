"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.melody_madness = void 0;
exports.melody_madness = {
    name: "Melody Madness",
    missionPack: "DarkSly's Madness Pack",
    time: 90 * 60,
    strikes: 4,
    widgets: 5,
    completions: [
        {
            time: 19 * 60 + 15,
            vid: "https://www.youtube.com/watch?v=4c5lC-YDr7g",
            completers: { defuser: "Danielstigman", experts: ["Miki2003pl", "Whalien"] },
        },
        {
            time: 12 * 60 + 57,
            isFirst: true,
            log: "file=55f45c439ef65f14d612158b5fd06989a715a198;bomb=D86UJ4",
            completer: "LegendWilleh",
        },
        { time: 5 * 60 + 51, log: "file=6188a2e78bc52510de83788738094d49e5d74bda;bomb=ZW0EE1", completer: "EpicToast" },
    ],
    modules: [
        "AppreciateArt",
        [2, "CruelPianoKeys"],
        [3, "FestivePianoKeys"],
        [2, "melodicMessage"],
        [2, "MusicalTransposition"],
        "needyPiano",
        [2, "PianoKeys"],
        "SimonSingsModule",
        "BrokenGuitarChordsModule",
        [2, "ChordQualities"],
        "coopharmonySequence",
        [2, "harmonySequence"],
        [2, "melodySequencer"],
        [3, "MusicRhythms"],
        [2, "scalarDials"],
        [2, "TheBlackPage"],
        [3, "jukebox"],
        [3, "weirdAlYankovic"],
        [3, "festiveJukebox"],
        [2, "lyricalNonsense"],
        [3, "guitarChords"],
        [2, "synesthesia"],
        [2, "bandboozledAgain"],
    ],
};
