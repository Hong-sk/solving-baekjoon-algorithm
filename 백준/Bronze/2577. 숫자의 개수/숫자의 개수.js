const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
const str = String(input[0] * input[1] * input[2]);
const obj = {};
for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++
    }
}
for (let i = 0; i < 10; i++) {
    if (obj[i] === undefined) {
        console.log(0);
    } else {
    console.log(obj[i]);
    }
}