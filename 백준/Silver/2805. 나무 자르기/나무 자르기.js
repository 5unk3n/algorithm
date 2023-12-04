const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let min = 0;
let max = trees[0];

while (min <= max) {
  const middle = Math.floor((min + max) / 2);

  let cutLength = 0;
  for (let i = 0; i < N; i++) {
    if (trees[i] <= middle) break;
    const cutTree = trees[i] - middle;
    cutLength += cutTree;
  }

  if (cutLength >= M) {
    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(max);