const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const K = +input[1];
const A = input[2].split(' ').map(Number);

const dp = Array.from({ length: K + 1 }, () => 0);
dp[0] = N;

for (let i = 1; i <= K; i++) {
  dp[i] = dp[i - 1] * (1 - A[i - 1] / N) + (N - dp[i - 1]) * (A[i - 1] / N);
}

console.log(dp[K]);
