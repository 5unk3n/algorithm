const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const N = +input;

const dp = Array.from({ length: N }, () =>
  Array.from({ length: 2 }, () => Array.from({ length: 3 }, () => 0))
);
dp[0][0][0] = dp[0][0][1] = dp[0][1][0] = 1;

for (let i = 1; i < N; i++) {
  dp[i][0][0] = dp[i - 1][0].reduce((a, b) => a + b) % 1000000;
  dp[i][0][1] = dp[i - 1][0][0] % 1000000;
  dp[i][0][2] = dp[i - 1][0][1] % 1000000;
  dp[i][1][0] =
    (dp[i - 1][0].reduce((a, b) => a + b) +
      dp[i - 1][1].reduce((a, b) => a + b)) %
    1000000;
  dp[i][1][1] = dp[i - 1][1][0] % 1000000;
  dp[i][1][2] = dp[i - 1][1][1] % 1000000;
}

console.log(dp[N - 1].flat().reduce((a, b) => a + b) % 1000000);
