// Day 21 | Finding the specific word in an array
const bannedWords = ["Spam", "Ad", "Fake", "Offer"];
const wordToCheck = "Fake";

// Yahan apni logic likho 'includes' use kar ke
// Agar word mil jaye to console karo "Message Blocked!"
// Agar na mile to console karo "Message Sent!"

for (let i = 0; i < bannedWords.length; i++) {
    if (bannedWords.includes(wordToCheck)) {
        console.log("Message Blocked!");
    }
    else {
        console.log("Message Sent!");
    }
}