const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1)
  .map(Number);

const result = [];

const MAX = 30;
const dp = Array.from({ length: MAX + 1 }, () =>
  Array.from({ length: MAX + 1 }, () => 0)
);

for (let i = 0; i <= MAX; i++) {
  for (let j = i; j <= MAX; j++) {
    if (i === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
}

input.forEach((N) => result.push(dp[N][N]));

console.log(result.join('\n'));
