const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const K = +input[1];
const coords = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const dist = coords.map((cur, idx, arr) => (idx ? cur - arr[idx - 1] : 0));

const sortedDist = dist.sort((a, b) => b - a);

const result = sortedDist.reduce(
  (acc, cur, idx) => (idx < K - 1 ? acc : acc + cur),
  0
);

console.log(result);
