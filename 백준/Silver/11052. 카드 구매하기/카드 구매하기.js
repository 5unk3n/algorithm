const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const cards = input[1].split(' ').map(Number);

const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  let max = 0;

  for (let j = 1; j <= i; j++) {
    max = Math.max(max, dp[i - j] + cards[j - 1]);
  }
  dp[i] = max;
}

console.log(dp[N]);
