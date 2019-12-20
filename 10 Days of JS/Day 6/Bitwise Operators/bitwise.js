function getMaxLessThanK(_n, _k) {

    let current;


    for (var j = 0; j < _n; j++) {
        for (var k = 1; k <= _n; k++) {

            if (current < _k) {

                current = j & k;
            }
        }

    }
    console.log(current);
    return current;

}

console.log(getMaxLessThanK(5, 2));