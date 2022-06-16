const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString().trim();

if(year % 4 === 0) {
    if(year % 100 === 0) {
        if(year % 400 === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else {
        console.log(1);
    }
} else {
    console.log(0);
}
