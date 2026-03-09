// Day 5 | Sum of all odd numbers

const nums = [3, 8, 5, 2, 7];

let sumOdd = 0;

for (let i = 0; i < nums.length; i++) {
    // console.log(i);
    // console.log(nums[i]);
    if (nums[i] % 2 !== 0) {
        // console.log(nums[i]);
        sumOdd = sumOdd + nums[i]; // 1: 0+3 => 3 => 2: 3+5 => 8 => 3: 8+7 => 15
        // console.log(sumOdd);
    }
}
console.log(sumOdd);