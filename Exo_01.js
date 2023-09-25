function calAge(a) {
    a = prompt("How old are you?")
    let age = parseInt(a);

    if (typeof age == 'number' && age >= 0) {
        return age * 365;
    } else {
        return "Enter a valid age";
    }
}

calAge();