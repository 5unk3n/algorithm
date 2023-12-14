const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const costs = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = [...costs];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    let prevMin = Infinity;

    for (let k = 0; k < 3; k++) {
      if (k === j) continue;
      prevMin = Math.min(prevMin, dp[i - 1][k]);
    }

    dp[i][j] = dp[i][j] + prevMin;
  }
}

console.log(Math.min(...dp[N - 1]));
