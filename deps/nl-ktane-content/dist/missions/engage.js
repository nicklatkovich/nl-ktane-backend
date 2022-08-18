"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.engage = void 0;
exports.engage = {
    name: "Engage",
    missionPack: "The Fallen",
    time: 60 * 60,
    strikes: 5,
    widgets: 7,
    completions: [
        {
            time: 15 * 60 + 9,
            vid: "https://www.youtube.com/watch?v=QZKkOswLhLs",
            completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
        },
        {
            time: 5 * 60 + 49,
            isFirst: true,
            vid: "https://www.youtube.com/watch?v=h8j1mmZccEE",
            completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
        },
        { time: 4 * 60 + 58, log: "file=4670e951961d882c2788eaff5c6e29c17df109be;bomb=T16NV2", completer: "LegendWilleh" },
        {
            time: 1 * 60 + 53,
            vid: "https://www.youtube.com/watch?v=COlbejgqgks",
            completers: { defuser: "Bianca", experts: ["Benjamin", "Burniel"] },
        },
    ],
    solvedByTP: true,
    modules: [
        [2, "MemoryV2"],
        "forgetThis",
        "cookieJars",
        "NeedyBeer",
        [
            18,
            "alphabet",
            "AnagramsModule",
            "Backgrounds",
            "BitOps",
            "BlindAlleyModule",
            "blockbusters",
            "boggle",
            "boolMaze",
            "TheBulbModule",
            "CaesarCipherModule",
            "calendar",
            "theCodeModule",
            "lgndColoredKeys",
            "ColoredSquaresModule",
            "ColourFlash",
            "colormath",
            "combinationLock",
            "complexKeypad",
            "complicatedButtonsModule",
            "graphModule",
            "lgndZoni",
            "CrazyTalk",
            "DecoloredSquaresModule",
            "digitalRoot",
            "doubleColor",
            "DoubleOhModule",
            "Emoji Math",
            "EnglishTest",
            "errorCodes",
            "europeanTravel",
            "ExtendedPassword",
            "FaultyBackgrounds",
            "FestivePianoKeys",
            "FlavorText",
            "ForeignExchangeRates",
            "FriendshipModule",
            "horribleMemory",
            "identityParade",
            "jackOLantern",
            "jukebox",
            "LEDEnc",
            "ledGrid",
            "LetterKeys",
            "Listening",
            "Mastermind Simple",
            "MazeScrambler",
            "Microcontroller",
            "MorseWar",
            "mortalKombat",
            "OrientationCube",
            "PartyTime",
            "PianoKeys",
            "poetry",
            "Probing",
            "radiator",
            "resistors",
            "RockPaperScissorsLizardSpockModule",
            "KeypadV2",
            "screw",
            "SeaShells",
            "Semaphore",
            "sevenWires",
            "shapeshift",
            "simonScrambles",
            "SimonV2",
            "ButtonV2",
            "BigSwitch",
            "switchModule",
            "symbolicCoordinates",
            "symbolicPasswordModule",
            "tashaSqueals",
            "TextField",
            "TwoBits",
            "WirePlacementModule",
            "greenArrowsModule",
            "redArrowsModule",
            "yellowArrowsModule",
            "BartendingModule",
        ],
        [
            18,
            "OneHundredAndOneDalmatiansModule",
            "AdjacentLettersModule",
            "spwizAdventureGame",
            "algebra",
            "alphabetNumbers",
            "arithmelogic",
            "spwizAstrology",
            "BattleshipModule",
            "benedictCumberbatch",
            "BigCircle",
            "BinaryLeds",
            "BinaryPuzzleModule",
            "binaryTree",
            "BitmapsModule",
            "BlackHoleModule",
            "BlindMaze",
            "booleanVennModule",
            "BrailleModule",
            "britishSlang",
            "BrokenButtonsModule",
            "BrokenGuitarChordsModule",
            "burgerAlarm",
            "burglarAlarm",
            "buttonSequencesModule",
            "catchphrase",
            "challengeAndContact",
            "characterShift",
            "CheapCheckoutModule",
            "ChessModule",
            "ChordQualities",
            "TheClockModule",
            "Color Decoding",
            "ColoredSwitchesModule",
            "Color Generator",
            "ColorMorseModule",
            "colourcode",
            "CoordinatesModule",
            "CrackboxModule",
            "CreationModule",
            "CryptModule",
            "curriculum",
            "CursedDoubleOhModule",
            "Detonato",
            "digitString",
            "DrDoctorModule",
            "equations",
            "equationsXModule",
            "fastMath",
            "fizzBuzzModule",
            "FlagsModule",
            "flashingLights",
            "FollowTheLeaderModule",
            "qFunctions",
            "TheGamepadModule",
            "graffitiNumbers",
            "greekCalculus",
            "GridlockModule",
            "GridMatching",
            "guitarChords",
            "HexamazeModule",
            "lgndHiddenColors",
            "HumanResourcesModule",
            "hunting",
            "iceCreamModule",
            "qSwedishMaze",
            "iPhone",
            "jewelVault",
            "KnowYourWay",
            "lasers",
            "Laundry",
            "leftandRight",
            "LightCycleModule",
            "lightspeed",
            "LionsShareModule",
            "Logic",
            "logicalButtonsModule",
            "logicGates",
            "londonUnderground",
            "MafiaModule",
            "MahjongModule",
            "maintenance",
            "manometers",
            "MarbleTumbleModule",
            "MaritimeFlagsModule",
            "MinesweeperModule",
            "modernCipher",
            "ModuleMaze",
            "ModuleAgainstHumanity",
            "monsplodeFight",
            "monsplodeCards",
            "moon",
            "MouseInTheMaze",
            "neutralization",
            "MysticSquareModule",
            "murder",
            "numberCipher",
            "OrientationCube",
            "Playfair",
            "sun",
            "ThirdBase",
            "NumberPad",
            "NonogramModule",
            "OnlyConnectModule",
            "periodicTable",
            "pieModule",
            "Poker",
            "PressX",
            "Questionmark",
            "RegularCrazyTalkModule",
            "resistors",
            "reverseMorse",
            "MusicRhythms",
            "RubiksCubeModule",
            "PasswordV2",
            "qSchlagDenBomb",
            "KritScripts",
            "SetModule",
            "shikaku",
            "SillySlots",
            "SimonScreamsModule",
            "SimonShrieksModule",
            "simonsStar",
            "SkewedSlotsModule",
            "sonic",
            "skyrim",
            "SynchronizationModule",
            "synonyms",
            "Tangrams",
            "TicTacToeModule",
            "timezone",
            "theTriangleButton",
            "unrelatedAnagrams",
            "USA",
            "valves",
            "X01",
            "visual_impairment",
            "wastemanagement",
            "wire",
            "wireSpaghetti",
            "EncryptedEquationsModule",
        ],
        [
            4,
            "spwiz3DMaze",
            "3dTunnels",
            "ColorfulInsanity",
            "ColorfulMadness",
            "CruelPianoKeys",
            "cube",
            "dragonEnergy",
            "EncryptedMorse",
            "factoryMaze",
            "GameOfLifeCruel",
            "GameOfLifeSimple",
            "KudosudokuModule",
            "LEGOModule",
            "Mastermind Cruel",
            "melodySequencer",
            "necronomicon",
            "PatternCubeModule",
            "PerplexingWiresModule",
            "spwizPerspectivePegs",
            "MazeV2",
            "PointOfOrderModule",
            "PolyhedralMazeModule",
            "quintuples",
            "quizBuzz",
            "romanArtModule",
            "rubiksClock",
            "ShapesBombs",
            "SimonSendsModule",
            "SimonSingsModule",
            "SplittingTheLootModule",
            "SimonSpinsModule",
            "stockMarket",
            "SuperlogicModule",
            "SymbolCycleModule",
            "turtleRobot",
            "webDesign",
            "XRayModule",
            "YahtzeeModule",
            "ZooModule",
            "unfairCipher",
            "OddOneOutModule",
            "transmittedMorseModule",
            "simonStops",
        ],
        [2, "TurnTheKey"],
    ],
};