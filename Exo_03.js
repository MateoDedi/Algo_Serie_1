function minMax(a) {

    let min = a[0];
    let max = a[0];

    for (let i = 1; i <= a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        } else if (a[i] > max) {
            max = a[i];
        }
    }

    console.log([min, max]);
}

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5])
minMax([1])