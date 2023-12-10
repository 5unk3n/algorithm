const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const item = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  const [weight, worth] = item[i - 1];

  for (let j = 1; j <= K; j++) {
    if (j >= weight) {
      const max = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + worth);
      dp[i][j] = max;
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][K]);
