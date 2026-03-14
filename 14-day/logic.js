// Day 14 | Finding VIP cars from and array of objects and sum up their total bill

const cars = [
    { model: "Corolla", isVIP: false, hours: 3 },
    { model: "Civic", isVIP: true, hours: 2 },
    { model: "Passo", isVIP: false, hours: 5 },
    { model: "Audi", isVIP: true, hours: 4 }
];

const vipCars = [];

let totalVIPBill = 0;

for (let i = 0; i < cars.length; i++) {
    if (cars[i].isVIP) {
        vipCars.push(cars[i].model);
        const currentBill = cars[i].hours * 500;
        totalVIPBill += currentBill;
    }
}
console.log(`VIP cars are ${vipCars.join(", ")}: and their total bill is: ${totalVIPBill}`);