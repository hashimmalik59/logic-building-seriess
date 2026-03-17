const warehouseStock = ["Brake Pads", "Engine Oil", "Clutch Plate", "Air Filter", "Spark Plug", "Battery", "Wipers"];
const itemsToShip = ["Brake Pads", "Battery", "Side Mirror"];
const damagedParts = ["Battery"];

for (let i = 0; i < itemsToShip.length; i++) {
    if (damagedParts.includes(warehouseStock[i]) && !damagedParts.includes(warehouseStock[i])) {
        console.log(`${warehouseStock[i]}: Ready for Shipping!`);
    } else if (damagedParts.includes(warehouseStock[i])) {
        console.log(`${warehouseStock[i]}: Quality Alert! Part is damaged!`);
    } else {
        console.log(`${warehouseStock[i]}: Not in Warehouse.`)
    }
}