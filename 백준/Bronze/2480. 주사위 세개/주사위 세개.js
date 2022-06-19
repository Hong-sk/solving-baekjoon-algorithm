const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === b && b === c) {
    console.log(10000 + 1000 * a);
} else if (a === b && b !== c) {
    console.log(1000 + 100 * a)
} else if (b === c && c !== a) {
    console.log(1000 + 100 * b)
} else if (c === a && a !== b) {
    console.log(1000 + 100 * c)
} else {
    if (a > b && a > c) {
        console.log(100 * a);
    } else if (b > a && b > c) {
        console.log(100 * b);
    } else {
        console.log(100 * c)
    }
}