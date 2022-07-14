const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (
    (input[i - 1] === undefined || input[i - 1] === " ") &&
    input[i] !== " "
  ) {
    count++;
  }
}
console.log(count);
