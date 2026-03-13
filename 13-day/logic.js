// Day 13 | Accessing ans item from an array and 10% discount, and show final price

const orders = [
    { id: 1, item: "Zinger Burger", price: 500, category: "Burger" },
    { id: 2, item: "French Fries", price: 200, category: "Sides" },
    { id: 3, item: "Beef Cheese Burger", price: 800, category: "Burger" },
    { id: 4, item: "Pepsi 1L", price: 150, category: "Drinks" },
    { id: 5, item: "Jalapeno Burger", price: 600, category: "Burger" },
    { id: 6, item: "Club Sandwich", price: 400, category: "Sandwich" },
    { id: 7, item: "Mighty Burger", price: 900, category: "Burger" }
];

let finalBill = 0;

for (let i = 0; i < orders.length; i++) {
    if (orders[i].category === "Burger") {

        // actual price after deduction of 10% discount
        let discount = orders[i].price - (orders[i].price * .1);

        // Final bill
        finalBill += discount;
    }
}

console.log(`Final bill after 10% discount: ${finalBill}`);