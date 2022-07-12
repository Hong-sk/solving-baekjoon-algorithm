const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const obj = {};
let max = 0;
let current = "";

for (let i = 0; i < input.length; i++) {
  if (Object.keys(obj).indexOf(input[i].toUpperCase()) === -1) {
    obj[input[i].toUpperCase()] = 1;
    // console.log(obj);
  } else {
    obj[input[i].toUpperCase()]++;
  }
}

for (let i in obj) {
  if (obj[i] > max) {
    max = obj[i];
    current = i;
  } else if (max === obj[i]) {
    current = "?";
  }
}

console.log(current);
