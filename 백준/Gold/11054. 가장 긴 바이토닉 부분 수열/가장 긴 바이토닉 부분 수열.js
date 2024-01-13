const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);

const dp = Array.from({ length: N }, () => Array.from({ length: 2 }, () => 1));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[i][0] < dp[j][0] + 1) {
      dp[i][0] = dp[j][0] + 1;
    }
  }
}

for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[i] > A[j] && dp[i][1] < dp[j][1] + 1) {
      dp[i][1] = dp[j][1] + 1;
    }
  }
}

console.log(Math.max(...dp.map((v) => v[0] + v[1])) - 1);
