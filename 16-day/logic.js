// Day 16 | Updating the price in array of object 10% increase and also update the new price

const mobiles = [
    { id: 101, model: "Samsung S24", price: 250000, stock: 5 },
    { id: 102, model: "iPhone 15", price: 150000, stock: 3 },
    { id: 103, model: "Google Pixel 8", price: 190000, stock: 4 }
];

for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].id === 102) {

        mobiles[i].price = 180000;

        console.log(`BEFORE | ${mobiles[i].model} | ${mobiles[i].price}`);
    }
    else {
        console.log(`BEFORE | ${mobiles[i].model} | ${mobiles[i].price}`);

        mobiles[i].price += mobiles[i].price * .1;

        console.log(`AFTER | ${mobiles[i].model} | ${mobiles[i].price}`);
    }
}