const input = require('fs').readFileSync('/dev/stdin').toString();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = '';

for (let i = 0; i < alphabet.length; i++) {
    result += input.indexOf(alphabet[i]) + ' ';
}

console.log(result);