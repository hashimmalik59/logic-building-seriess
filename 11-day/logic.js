// Day 11 | Finding positive & negative numbers and also their length

const nums = [0, 1, -2, 3, -4, 5, -6, 7, -8, -9,];

let posLen = 0;
let negLen = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) posLen++;
    else if (nums[i] < 0) negLen++;
    else console.log("Zero is a neutral");
}

console.log(`Positive ${posLen} & Negative ${negLen}`);