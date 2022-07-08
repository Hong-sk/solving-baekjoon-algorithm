const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const iteration = parseInt(input[0]);
let arr = [];
let sum = 0;
let avg = 0;
let count = 0;

for (let i = 1; i <= iteration; i++) {
    arr = input[i].split(' ').map(el => parseInt(el));
    for (let j = 1; j <= arr[0]; j++) {
        sum += arr[j];
    }
    // console.log((sum / arr[0]).toFixed(3) + "%");
    avg = sum / arr[0];
    for (let j = 1; j <= arr[0]; j++) {
        if (arr[j] > avg) {
            count++;
        }
    }
    console.log((count / arr[0] * 100).toFixed(3) + '%');
    sum = 0;
    count = 0;
}