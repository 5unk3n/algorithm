const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const triangle = input.slice(1).map((v) => v.split(' ').map(Number));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    const left = triangle[i - 1][j - 1] || 0;
    const right = triangle[i - 1][j] || 0;

    const max = Math.max(left, right);
    triangle[i][j] = triangle[i][j] + max;
  }
}

console.log(Math.max(...triangle[n - 1]));
