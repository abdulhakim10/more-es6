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
console.log(result);