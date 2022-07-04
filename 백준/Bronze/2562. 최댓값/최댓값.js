const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
const max = Math.max(...input);
console.log(max + '\n' + (input.indexOf(max)+1));