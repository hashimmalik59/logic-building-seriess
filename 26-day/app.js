const cart = [
  { name: "Engine Oil", price: 4500, category: "Maintenance" },
  { name: "Brake Pads", price: 2500, category: "Brakes" },
  { name: "Air Filter", price: 1600, category: "Maintenance" },
  { name: "Side Mirror", price: 3000, category: "Body" },
  { name: "Oil Filter", price: 800, category: "Maintenance" },
];

const moreThen15 = cart
  .filter((item) => item.price >= 1500)
  .map((item) => {
    return item.category === "Maintenance" ? item.price * 0.9 : item.price;
  })
  .reduce((acc, currVal) => acc + currVal, 0);

// console.log(moreThen15);
