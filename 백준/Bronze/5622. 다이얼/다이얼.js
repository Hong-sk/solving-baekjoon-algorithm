const input = require("fs").readFileSync("/dev/stdin").toString();

let count = 0;

const arr = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].indexOf(input[i]) !== -1) {
      count += j + 3;
    }
  }
}

console.log(count);
