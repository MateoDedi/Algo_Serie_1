function calcFuel(dist) {
    let result = dist * 10;
    if (result < 100) {
        return 100;
    } else if (dist > 0 && result >= 100) {
        return result;
    } else {
        return "Distance can't be less than 0";
    }
}

console.log(calcFuel(15));
console.log(calcFuel(23.5));
console.log(calcFuel(3));