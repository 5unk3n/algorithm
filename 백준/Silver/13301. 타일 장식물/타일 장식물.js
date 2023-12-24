const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];

const dp = Array.from({ length: N + 1 }, () => 0);
dp[0] = 0n;
dp[1] = 1n;
dp[2] = 1n;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log((dp[N] * 4n + dp[N - 1] * 2n).toString());
