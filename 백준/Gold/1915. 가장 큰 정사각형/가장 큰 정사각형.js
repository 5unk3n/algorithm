const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split('').map(Number));

const dp = [...arr];

for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    if (dp[i][j] === 1) {
      const prevMinimum = Math.min(
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1]
      );
      dp[i][j] = prevMinimum + 1;
    }
  }
}

console.log(Math.max(...dp.flat()) ** 2);
