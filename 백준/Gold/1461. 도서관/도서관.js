const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const books = input[1].split(' ').map(Number);

let result = 0;

const left = books.filter((v) => v < 0).sort((a, b) => a - b);
const right = books.filter((v) => v > 0).sort((a, b) => b - a);

for (let i = 0; i < left.length; i += M) {
  result += Math.abs(left[i]) * 2;
}
for (let i = 0; i < right.length; i += M) {
  result += right[i] * 2;
}

result -= Math.max(Math.abs(left[0]) || 0, right[0] || 0);

console.log(result);
