const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const sequence = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const x = +input[2];

let result = 0;

let frontIdx = 0;
let backIdx = n - 1;

while (frontIdx < backIdx) {
  const sum = sequence[frontIdx] + sequence[backIdx];

  if (sum === x) {
    result++;
    frontIdx++;
    backIdx--;
  } else if (sum < x) {
    frontIdx++;
  } else {
    backIdx--;
  }
}

console.log(result);
