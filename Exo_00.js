function makesTen(a, b) {
    a = prompt("Enter a 1st number");
    let num1 = parseInt(a);
    b = prompt("Enter a 2nd number");
    let num2 = parseInt(b);

        if (num1 == 10 || num2 == 10) {
            return true;
        } else if (num1 + num2 == 10) {
            return true;
        } else {
            return false;
        }
};

makesTen();