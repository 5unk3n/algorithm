const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);

const dp = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[i] <= dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}

console.log(Math.max(...dp));
