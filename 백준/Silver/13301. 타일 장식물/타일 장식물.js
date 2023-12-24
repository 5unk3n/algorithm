const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N] * 4 + dp[N - 1] * 2);
