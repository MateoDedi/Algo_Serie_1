function addUp(a) {

    a = prompt("Enter a max number");

    if (a > 0 && a <= 1000) {
        maxNum = parseInt(a);
        let sum = 0;
        for (let i = 0; i <= maxNum; i++) {
            sum += i
        }
        return sum;
        
    } else {
        return "Enter a valid number";
    }
}

addUp();