const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let word = "";

for (let i = 1; i <= parseInt(input[0]); i++) {
  let arr = input[i].split(" ");
  for (let j = 0; j < arr[1].length; j++) {
    for (let k = 0; k < parseInt(arr[0]); k++) {
      word += arr[1][j];
    }
  }
  console.log(word);
  word = "";
}
