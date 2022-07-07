const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const iteration  = parseInt(input[0]);
let sum;
let score;

for (let i = 1; i <= iteration; i++) {
    sum = 0;
    score = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'X') {
            score = 0;
        } else {
            score++;
        }
        sum += score;
    }
    console.log(sum);
}
