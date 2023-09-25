function detectWord (a) {
    word = '';

    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i].toLowerCase()) {
            word += a[i];
        }
    }
    return word;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));