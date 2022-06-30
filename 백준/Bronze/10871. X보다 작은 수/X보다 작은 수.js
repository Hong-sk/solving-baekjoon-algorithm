const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arrLength = parseInt(input[0].split(' ')[0]);
const standard = parseInt(input[0].split(' ')[1]);
const arr = input[1].split(' ');
let result = '';

for (let i = 0; i < arrLength; i++) {
    if (arr[i] < standard) {
        result += arr[i] + ' '
    }
}

console.log(result);