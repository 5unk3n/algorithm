const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\r\n');

const N = +input[0];
const A = input[1].split(' ');
const M = +input[2];
const B = input[3].split(' ');

let bIndex = 0;

const LCS = [];

for (let i = 0; i < N; i++) {
  for (let j = bIndex; j < M; j++) {
    if (A[i] === B[j]) {
      LCS.push(A[i]);
      bIndex = j + 1;
    }
  }
}

let LCSCopy = [...LCS];
let result = [];

while (LCSCopy.length) {
  let max = '0';
  let maxIndex = 0;

  for (let i = 0; i < LCSCopy.length; i++) {
    if (max.localeCompare(LCSCopy[i]) === -1) {
      max = LCSCopy[i];
      maxIndex = i;
    }
  }

  LCSCopy = LCSCopy.slice(maxIndex + 1);
  result.push(max);
}

console.log(result.length);
console.log(result.join(' '));
