const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
let hour = a[0];
let minute = a[1];

const time = parseInt(input[1]);

let checkMinute = minute + time;

if (checkMinute <= 59) {
    console.log(`${hour} ${minute + time}`)
} else {
    while(checkMinute >= 60) {
        hour++;
        if(hour === 24) {
            hour = 0;
        }
        checkMinute -= 60;
    }
    console.log(`${hour} ${checkMinute}`)
}