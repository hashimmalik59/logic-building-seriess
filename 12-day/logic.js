// Day 12 | Finding the avaialble items prices and total them

const inventory = [
    { name: "Samsung A54", price: 500, isAvailable: true },
    { name: "iPhone 13", price: 900, isAvailable: false },
    { name: "Redmi Note 12", price: 300, isAvailable: true },
    { name: "Pixel 7", price: 700, isAvailable: false },
    { name: "Nothing Phone", price: 600, isAvailable: true }
];

let totalBill = 0;

const availableName = [];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].isAvailable) {
        totalBill += inventory[i].price;
        availableName.push(inventory[i].name);
    }
}

console.log(`Available items: ${availableName.join(", ")}: and total bill is, ${totalBill}`)