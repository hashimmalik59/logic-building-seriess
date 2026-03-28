// day 2 | Filter the truthy values

let val = ["Hashim", 23, null, undefined, 0, "", true];

let truVal = [];

for (let i = 0; i < val.length; i++) {
    if (val[i]) {
        truVal.push(val[i]);
    }
}

console.log(truVal);

function filterFunction(arr) {
    let cleanArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            cleanArr.push(arr[i]);
        }
    }
    return cleanArr;
}

const rawArr = [23, "Hashim", null, 0, " ", undefined];
const result = filterFunction(rawArr);
console.log(result);