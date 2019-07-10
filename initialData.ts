export interface TestResult {
    time: number, 
    turns: number
    [key: string]: any
};

export type TestResults = TestResult[];

export interface Summary {
    fruitPiece: TestResults,
    cocopops: TestResults,
    muesli: TestResults,
    toast: TestResults,
    noFood: TestResults,
    smoothy: TestResults,
    porridge: TestResults,
    upAndGo: TestResults,
    yougurt: TestResults,
    riceBubbles: TestResults,
    [key: string]: any
}

//, {time: , turns: }

export const firstTest: Summary = {
    fruitPiece: [{time: 4.50, turns: 80}, {time: 9.47, turns: 85}, {time: 6.39, turns: 101}, {time: 7.00, turns: 116}],
    cocopops: [{time: 6.07, turns: 60}, {time: 6.48, turns: 78}, {time: 8.29, turns: 108}, {time: 6.58, turns: 90}],
    muesli: [{time: 11.43, turns: 131}, {time: 5.06, turns: 82}, {time: 12.59, turns: 101}, {time: 3.16, turns: 78}],
    toast: [{time: 7.15, turns: 52}, {time: 7.13, turns: 93}, {time: 226, turns: 96}, {time: 6.33, turns: 131}],
    noFood: [{time: 5.32, turns: 102}, {time: 4.44, turns: 73}, {time: 8.31, turns:71 }, {time: 4.06, turns: 83}, {time: 5.48, turns: 82}
    ],
    smoothy: [{time: 5.14, turns: 127}, {time: 7.15, turns: 82}, {time: 5.04, turns: 47}, {time: 4.15, turns: 76}],
    porridge: [{time: 5.07, turns: 90}, {time: 4.41, turns: 80}, {time: 5.18, turns: 43}, {time: 5.24, turns: 91}, {time: 5.53, turns: 90}
    ],
    upAndGo: [{time: 6.45, turns: 132}, {time: 6.40, turns: 92}, {time: 4.24, turns: 37}, {time: 5.00, turns: 90}, {time: 7.30, turns: 131}
    ],
    yougurt: [{time: 7.51, turns: 81}, {time: 7.8, turns: 121}, {time: 8.55, turns: 70}, {time: 6.19, turns: 106}],
    riceBubbles: [{time: 6.51, turns: 101}, {time: 6.06, turns: 100}, {time: 6.22, turns: 57}, {time: 4.18, turns: 90}],
}

export const secondTest: Summary = {
    fruitPiece: [{time: 10.27, turns: 90}, {time: 7.03, turns: 85}, {time: 7.07, turns: 144}, {time: 11.02, turns: 151}],
    cocopops: [{time: 6.01, turns: 117}, {time: 6.32, turns: 107}, {time: 7.13, turns: 137}, {time: 5.58, turns: 124}],
    muesli: [{time: 10.54, turns: 96}, {time: 7.00, turns: 77}, {time: 9.17, turns: 128}, {time: 4.18, turns: 119}],
    toast: [{time: 5.39, turns: 38}, {time: 4.45, turns: 108}, {time: 7.40, turns: 135}, {time: 7.00, turns: 79}],
    noFood: [{time: 5.48, turns: 78}, {time: 4.09, turns: 95}, {time: 6.15, turns: 54}, {time: 5.19, turns: 104}, {time: 5.44, turns: 97}
    ],
    smoothy: [{time: 4.28, turns: 107}, {time: 5.20, turns: 93}, {time: 6.36, turns: 46}, {time: 6.59, turns: 147}],
    porridge: [{time: 6.17, turns: 131}, {time: 6.22, turns: 102}, {time: 6.42, turns: 50}, {time: 5.10, turns: 121}, {time: 6.09, turns: 107}
    ],
    upAndGo: [{time: 4.52, turns: 100}, {time: 10.61, turns: 132}, {time: 4.28, turns: 34}, {time: 7.15, turns: 145}, {time: 7.53, turns: 128}
    ],
    yougurt: [{time: 3.43, turns: 71}, {time: 88, turns: 108}, {time: 5.34, turns: 75}, {time: 4.59, turns: 114}],
    riceBubbles: [{time: 5.00, turns: 107}, {time: 9.12, turns: 106}, {time: 4.30, turns: 85}, {time: 8.15, turns: 123}],
}