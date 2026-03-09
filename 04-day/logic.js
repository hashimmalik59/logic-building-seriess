// Day 4 | Finding second largest number

const nums = [10, 5, 20, 8, 12];

let largeNum = nums[0];

let secondNum = nums[0];

for (let i = 1; i < nums.length; i++) {

    if (nums[i] > largeNum) {
        secondNum = largeNum;
        largeNum = nums[i];
    } else if (nums[i] > secondNum) {
        secondNum = nums[i];
    }
}

console.log(secondNum);
