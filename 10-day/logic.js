// Day 10 | Finding positive numbers in an array and pushing into another array

const nums = [-10, 50, 0, -2, 100];

const positiveNums = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        positiveNums.push(nums[i]);
    }
}

console.log(positiveNums);