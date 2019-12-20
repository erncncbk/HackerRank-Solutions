'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
    process.exit(0);
});

function readLine() {
    return inputString[currentLine++];
}
// (skeliton_head) ----------------------------------------------------------------------

function getMaxLessThanK(n, k) {
    let m = 0;
    for (let a = 1; a < n; ++a) {
        for (let b = a + 1; b <= n; ++b) {
            let v = a & b;
            if (v < k && v > m) m = v;
        }
    }
    return m;
}

// (skeliton_tail) ----------------------------------------------------------------------
function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
        process.stdin.close();
    }
}