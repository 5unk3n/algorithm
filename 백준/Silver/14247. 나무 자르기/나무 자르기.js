const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const heights = input[1].split(' ').map(Number);
const grow = input[2].split(' ').map(Number);

const sortedTree = heights
  .map((cur, idx) => [cur, grow[idx]])
  .sort((a, b) => a[1] - b[1]);

const result = sortedTree.reduce(
  (acc, cur, idx) => acc + cur[0] + cur[1] * idx,
  0
);

console.log(result);
