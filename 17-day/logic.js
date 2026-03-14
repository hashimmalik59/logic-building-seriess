// Day 17 | If stock is less then 2 then increase its price 10%

const mobiles = [
    { id: 101, model: "Samsung S24", price: 250000, stock: 5 },
    { id: 102, model: "iPhone 15", price: 180000, stock: 1 }, // Target!
    { id: 103, model: "Google Pixel 8", price: 190000, stock: 4 },
    { id: 104, model: "Nothing Phone 2", price: 120000, stock: 1 }, // Ye bhi target hai lekin break lagana hai
    { id: 105, model: "Xiaomi 14", price: 150000, stock: 10 }
];

for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].stock < 2) {
        console.log(`BEFORE: ${mobiles[i].model} ${mobiles[i].price}`);
        mobiles[i].price = mobiles[i].price + mobiles[i].price * .1;
        console.log(`AFTER: ${mobiles[i].model} ${mobiles[i].price}`);
    }
}