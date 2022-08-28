const numbers = [2, 8, 6, 3, 7];



function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(number) {
    return number * 2;
}

const doubleIt = number => number * 2;
const result = getDoubled(numbers);

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(number => number * 2);
const makeDoubleSimple = numbers.map(x => x * 2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(makeDouble);
console.log(makeDoubleDirect);
console.log(makeDoubleSimple);
console.log(fiveTimes);