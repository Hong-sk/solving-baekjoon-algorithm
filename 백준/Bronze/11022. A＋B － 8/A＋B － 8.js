const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let arr;
for (let i = 1; i <= parseInt(input[0]); i++) {
    arr = input[i].split(' ').map(el => parseInt(el));
    console.log(`Case #${i}: ${arr[0]} + ${arr[1]} = ${arr[0] + arr[1]}`)
}