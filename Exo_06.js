function animals(a, b, c) {
   let chickens = a * 2;
   let cows     = b * 4;
   let pigs     = c * 4;

   legs = chickens + cows + pigs;

   return legs;
}

console.log(animals(2, 3, 5));

console.log(animals(1, 2, 3));

console.log(animals(5, 2, 8));