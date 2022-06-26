const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr;
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    arr = input[i].split(' ');
    answer += parseInt(arr[0]) + parseInt(arr[1]) + '\n'
}
console.log(answer);