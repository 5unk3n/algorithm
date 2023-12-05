const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const levels = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let min = 1;
let max = levels[N - 1] + K;

while (min <= max) {
  const middle = Math.floor((min + max) / 2);
  const T = levels.reduce(
    (acc, cur) => (cur > middle ? acc : acc + middle - cur),
    0
  );

  if (T <= K) {
    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(max);
