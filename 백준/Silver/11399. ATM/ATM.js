const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const P = input[1].split(' ').map(Number);

const sortedP = [...P].sort((a, b) => a - b);

for (let i = 1; i < N; i++) {
  sortedP[i] = sortedP[i - 1] + sortedP[i];
}

console.log(sortedP.reduce((a, b) => a + b));
