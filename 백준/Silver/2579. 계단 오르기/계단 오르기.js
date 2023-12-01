const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const stairs = input.slice(1).map(Number);

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = stairs[0];
dp[2] = stairs[0] + stairs[1];
dp[3] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i - 1],
    dp[i - 3] + stairs[i - 2] + stairs[i - 1]
  );
}

console.log(dp[N]);
