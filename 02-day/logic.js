// Day 2 sum of all array numbers

// const nums = [1, 2, 3, 4, 5];

// let sumAllNums = 0;

// for (let i = 0; i < nums.length; i++) {
//     sumAllNums += nums[i];
// }

// console.log(sumAllNums);

function sumAllNums(nums) {
    let sumNum = 0;

    for (let i = 0; i < nums.length; i++) {
        sumNum += nums[i];
    }

    return sumNum;
}
console.log(sumAllNums([1, 2, 3, 4, 5]));
console.log(sumAllNums([7, 8, 9]));
console.log(sumAllNums([4, 6, 0]));