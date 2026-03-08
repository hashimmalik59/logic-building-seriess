// Day 3 | Sum of all array number

const numbers = [21, 34, 54, 786];

let newNum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        newNum = newNum + numbers[i];
    }
}
console.log(newNum);
