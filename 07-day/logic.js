// Day 7 | Finding Odd number

const nums = [10, 20, 15, 30];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        console.log("ODD", nums[i]);
        break;
    }
}