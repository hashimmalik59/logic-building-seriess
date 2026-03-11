// Day 8 | Finding the repitittive letter in a string

function findRepititiveWord(str) {
    const strToLowerToArr = str.toLowerCase().split("");
    for (let i = 0; i < strToLowerToArr.length; i++) {
        for (let j = i + 1; j < strToLowerToArr.length; j++) {
            if (strToLowerToArr[i] === strToLowerToArr[j]) {
                console.log(`Repititive word "${strToLowerToArr[i]}"`);
                return;
            }
        }
    }
    console.log("No Repititve Found!");
}
findRepititiveWord("Hashim");