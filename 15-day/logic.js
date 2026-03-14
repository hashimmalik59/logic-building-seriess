// Day 15 | Targetting the specific id on array of objects and updating its price

const mobiles = [
    { id: 101, model: "Samsung S24", price: 250000, stock: 5 },
    { id: 102, model: "iPhone 15", price: 150000, stock: 3 }, // Ghalat Price!
    { id: 103, model: "Google Pixel 8", price: 190000, stock: 4 }
];

for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].id === 102) {
        mobiles[i].price = 180000;
        break; // Kaam khatam, aage jane ki zaroorat nahi.
    }
}

console.log(mobiles[1].price);