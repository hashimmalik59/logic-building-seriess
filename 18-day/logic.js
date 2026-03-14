// Day 18 | FInding the total stock of those items having price 180000

const mobiles = [
    { id: 101, model: "Samsung S24", price: 250000, stock: 5 },
    { id: 102, model: "iPhone 15", price: 180000, stock: 1 },
    { id: 103, model: "Google Pixel 8", price: 190000, stock: 4 },
    { id: 104, model: "Nothing Phone 2", price: 120000, stock: 1 },
    { id: 105, model: "Xiaomi 14", price: 150000, stock: 10 }
];

let totalStock = 0;

const expensivePhone = [];

for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].price > 180000) {
        expensivePhone.push(mobiles[i].model);
        totalStock += mobiles[i].stock;
    }
}

console.log(`Expensive phones ${expensivePhone.join(", ")} stock is: ${totalStock}`);