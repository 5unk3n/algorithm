const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const dp = Array.from({ length: +input + 1 }, () =>
  Array.from({ length: 10 }, () => 0)
);
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const MOD = 1000000000;

for (let i = 2; i <= input; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0;
    if (j - 1 >= 0) dp[i][j] += dp[i - 1][j - 1];
    if (j + 1 <= 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= MOD;
  }
}

const result = dp[input].reduce((acc, curr) => (acc + curr) % MOD, 0);
console.log(result);
