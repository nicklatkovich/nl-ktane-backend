"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.casino = void 0;
exports.casino = {
    name: "Casino",
    missionPack: "The Swarm",
    time: 48 * 60,
    strikes: 6,
    widgets: 5,
    completions: [
        {
            time: 12 * 60 + 7,
            vid: "https://www.youtube.com/watch?v=6eF-MnOzOu8",
            completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
        },
        {
            time: 8 * 60 + 52,
            isFirst: true,
            log: "file=29af584fe7566e23324263e7d7e197d757d5b0d2;bomb=JA1ET3",
            completer: "LegendWilleh",
        },
        {
            time: 7 * 60 + 24,
            vid: "https://www.youtube.com/watch?v=6TfWJRK85sk",
            completers: { defuser: "Orinami", experts: ["Asew", "Dicey"] },
        },
        { time: 1 * 60 + 42, log: "file=4a0106ee38b303c7ca43d1010190331b370ff0d6;bomb=LK5HZ1", completer: "Edan" },
    ],
    modules: [
        "EncryptedDice",
        "luckyDice",
        "YahtzeeModule",
        [2, "SkewedSlotsModule"],
        [4, "SillySlots"],
        [2, "PointOfOrderModule"],
        "ksmBadugi",
        [2, "Poker"],
        "KritBlackjack",
        [2, "deckOfManyThings"],
        "monsplodeCards",
        [2, "SplittingTheLootModule"],
        [2, "riskyWires"],
        [2, "jukebox"],
        [2, "BartendingModule"],
        "TheGamepadModule",
        [2, "GSNineBall"],
        [2, "thedealmaker"],
        "mortalKombat",
        "sonicKnuckles",
        "bridge",
        "PasswordV2",
        [2, "dominoes"],
        "TheOneTwoThreeGame",
        "SueetWall",
        [2, "NotPokerModule"],
        "PartyTime",
        "giantsDrink",
        "jewelVault",
        "Krit4CardMonte",
        "encryptionBingo",
        "KritFlipTheCoin",
    ],
};
