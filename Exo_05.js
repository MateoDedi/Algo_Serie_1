function sortDrinkByPrice(drinks) {
    drinks.sort((a, b) => a.price - b.price)
    return drinks;
}

const drinks = [
    { name: "lemonade", price: 10 },
    { name: "lime", price: 10 },
    { name: "coke", price: 8 },
    { name: "vodka", price: 17 },
    { name: "water", price: 3 },
  ];

const sortedDrinks = sortDrinkByPrice(drinks);
console.log(sortedDrinks);