// Day 22 | Removing specific items from an array of objects with includes method

const mobiles = [
    { id: 101, name: "Samsung A54", price: 95000 },
    { id: 102, name: "iPhone 15", price: 350000 },
    { id: 103, name: "Google Pixel 8", price: 180000 },
    { id: 104, name: "Nothing Phone 2", price: 120000 },
    { id: 105, name: "Xiaomi 13T", price: 110000 }
];

// In IDs ko nikaalna hai (User ne ye delete ki hain)
const rejectedIds = [102, 104, 105];

let finalCart = [];

// AB YAHAN APNA LOOP AUR 'IF' LOGIC LIKHO
for (let i = 0; i < mobiles.length; i++) {

    // Logic: Agar mobile id 'rejectedIds' mein SHAMIL NAHI HAI (!)
    // Toh finalCart mein push karo

    // Bad Practice at some case
    // if (mobiles[i].id !== 102 && mobiles[i].id !== 104 && mobiles[i].id !== 105) {

    if (!rejectedIds.includes(mobiles[i].id)) {
        finalCart.push(mobiles[i]);
    }
}

console.log("Mera Saaf Suthra Cart:", finalCart);