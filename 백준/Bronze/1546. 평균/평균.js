const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[1].split(' ').map(el => parseInt(el));
let result = 0;
const max = Math.max(...arr);

for (let i = 0; i < parseInt(input[0]); i++) {
    result += arr[i] / max * 100;
}
console.log(result / arr.length)