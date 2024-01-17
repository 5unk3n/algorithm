const input = require('fs')
  .readFileSync(process.platform == 'linux' ? '/dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);
