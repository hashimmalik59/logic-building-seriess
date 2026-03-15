// Day 20 | Removing a specific items from an array of object

const mobiles = [
    { id: 101, model: "Samsung S24", price: 250000, stock: 5 },
    { id: 102, model: "iPhone 15", price: 180000, stock: 1 },
    { id: 103, model: "Google Pixel 8", price: 190000, stock: 4 },
    { id: 104, model: "Nothing Phone 2", price: 120000, stock: 1 },
    { id: 105, model: "Xiaomi 14", price: 150000, stock: 10 }
];

const cheapMobiles = [];

for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].id !== 102 && mobiles[i].id !== 104) {
        cheapMobiles.push(mobiles[i]);
    }
}

console.log(mobiles);
console.log(cheapMobiles);