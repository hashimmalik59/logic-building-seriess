// Day 6 | Remove Duplicate

const nums = [9, 2, 9];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            console.log("Duplicate", nums[i]);
        }
    }
}