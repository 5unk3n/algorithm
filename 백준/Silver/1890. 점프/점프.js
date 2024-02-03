const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const map = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => 0n));
dp[0][0] = 1n;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (dp[i][j] === 0n || map[i][j] === 0) continue;

    const num = map[i][j];
    if (num + i < N) {
      dp[i + num][j] += dp[i][j];
    }
    if (num + j < N) {
      dp[i][j + num] += dp[i][j];
    }
  }
}

console.log(dp[N - 1][N - 1].toString());
