// Day 1 of logic building


const allNums = [8, 5, 2, 9, 6];

// let max = allNums[0];

// for (let i = 1; i < allNums.length; i++) {
//     if (max < allNums[i]) {
//         max = allNums[i];
//     }
// }
// console.log(max);

function maxNum(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
            return max;
        }
    }
}
console.log(maxNum(allNums));