const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result;
let oneSentence ='';

for (let i = 1; i <= input; i++) {
    for (let j = 0; j < input - i; j++) {
        oneSentence += ' ';
    }
    for (let j = 0; j < i; j++) {
        oneSentence += '*'
    }
    console.log(oneSentence);
    oneSentence = '';
}

