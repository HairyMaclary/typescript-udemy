import { firstTest, secondTest, TestResult, TestResults } from './initialData';

type AverageForFood = { firstTest: number, secondTest: number };

// sums accross an Array
const reducer = (accumulator: number, currentValue: TestResult): number =>  accumulator + currentValue.turns;

const createAverage = (testResultsForFoodType: TestResults) => {
    const totalTurns = testResultsForFoodType.reduce(reducer, 0);
    return totalTurns/testResultsForFoodType.length;
}

// populate an average 'turns' object organised by food type
let averageTurnsByFood: { [food: string]: AverageForFood } = {};
const foodEntries = Object.keys(firstTest); // all the food types in the study

foodEntries.forEach( entry => {
    averageTurnsByFood[entry] = { firstTest: createAverage(firstTest[entry]), secondTest: createAverage(secondTest[entry]) }
});

console.log(averageTurnsByFood);