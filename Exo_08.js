function frames(a, b) {
   let result = (a * 60) * b;
   return result;
}

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));
