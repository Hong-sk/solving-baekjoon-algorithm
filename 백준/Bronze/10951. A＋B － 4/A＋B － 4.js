const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr;
let answer = '';
for (let i = 0; i < input.length; i++) {
    arr = input[i].split(' ').map(el => parseInt(el));
    answer += arr[0] + arr[1] + '\n';
}
console.log(answer);