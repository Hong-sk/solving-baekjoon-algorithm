const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const one = parseInt(input[0][2] + input[0][1] + input[0][0]);
const two = parseInt(input[1][2] + input[1][1] + input[1][0]);

if (one > two) {
  console.log(one);
} else {
  console.log(two);
}
