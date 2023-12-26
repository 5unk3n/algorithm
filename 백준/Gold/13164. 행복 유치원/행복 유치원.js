const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

const diffFromNext = heights.map((v, i, a) => (a[i + 1] ? a[i + 1] - v : 0));
diffFromNext.sort((a, b) => a - b);

for (let i = 0; i < K - 1; i++) {
  diffFromNext.pop();
}

console.log(diffFromNext.reduce((a, b) => a + b));
