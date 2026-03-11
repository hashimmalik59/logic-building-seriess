// Day 9 | Finding the length of repititive word in a string

const str = "Madam";

let sum = 0;

const cleanStr = str.toLowerCase().split("");

for (let i = 0; i < cleanStr.length; i++) {
    for (let j = i + 1; j < cleanStr.length; j++) {
        if (cleanStr[i] === cleanStr[j]) {
            console.log(`Repititive letter '${cleanStr[i]}'`);
            sum += 1;
            console.log(`Duplicate letter '${sum}'`);
        }
    }
}
