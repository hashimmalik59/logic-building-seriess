// Day 1 | Lomgest word challenge

let str = "i love code";

let arr = str.split(" ");

let longWord = "";

let len = 0

for (let i = 0; i < arr.length; i++) {
    if (str.length > 1) {
        if (longWord.length < arr[i].length) {
            longWord = arr[i];
            len = arr[i].length;
        }
    } else {
        console.log("Invalid");
    }
}
console.log(`${longWord} is longest word and its length is ${len}`);