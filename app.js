"use strict";
const chanceSame = (numPairs) => {
    if (numPairs === 1)
        return 0.5;
    return 1 / (numPairs * 2 - 1);
};
const isMatch = (pairCount) => {
    const randomNumber = Math.random();
    const matchProb = chanceSame(pairCount);
    if (matchProb > randomNumber)
        return true;
    else
        return false;
};
const runGame = () => {
    let pairsRemaining = 26;
    let count = 0;
    while (pairsRemaining > 0) {
        const pairFound = isMatch(pairsRemaining);
        if (pairFound) {
            pairsRemaining -= 1;
        }
        count++;
    }
    return count;
};
const collectAverage = () => {
    let testRunCount = 100000;
    let results = [];
    let avg;
    while (testRunCount > 0) {
        let turns = runGame();
        testRunCount--;
        if (typeof turns === 'number')
            results.push(turns);
        else
            throw new Error('non numerical result returned from runGame()');
    }
    if (results.length) {
        const sum = results.reduce(function (a, b) { return a + b; });
        avg = sum / results.length;
    }
    else
        avg = 0;
    console.log('ave:', avg);
};
collectAverage();
//# sourceMappingURL=app.js.map