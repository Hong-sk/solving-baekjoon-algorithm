const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer= '';
for (let i = 1; i <= parseInt(input); i++) {
    answer += i + '\n';
}
console.log(answer);