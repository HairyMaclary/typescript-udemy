"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialData_1 = require("./initialData");
// sums accross an Array
const reducer = (accumulator, currentValue) => accumulator + currentValue.turns;
const createAverage = (testResultsForFoodType) => {
    const totalTurns = testResultsForFoodType.reduce(reducer, 0);
    return totalTurns / testResultsForFoodType.length;
};
// populate an average 'turns' object organised by food type
let averageTurnsByFood = {};
const foodEntries = Object.keys(initialData_1.firstTest); // all the food types in the study
foodEntries.forEach(entry => {
    averageTurnsByFood[entry] = { firstTest: createAverage(initialData_1.firstTest[entry]), secondTest: createAverage(initialData_1.secondTest[entry]) };
});
console.log(averageTurnsByFood);
//# sourceMappingURL=app.js.map