const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

let [N, K] = input[0].split(' ').map(Number);
const A = input.slice(1).map(Number);

let result = 0;

let idx = N - 1;
while (K) {
  if (K / A[idx] >= 1) {
    result += Math.floor(K / A[idx]);
    K %= A[idx];
  }

  idx--;
}

console.log(result);
