const N = +require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const dp = Array.from({ length: N + 1 }, () => 0);

dp[0] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  if (i % 2) continue;

  dp[i] = dp[i - 2] * 3;

  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[N]);
