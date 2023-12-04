const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const schedule = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = N - 1; i >= 0; i--) {
  const [T, P] = schedule[i];
  const nextConsult = i + T;

  if (nextConsult <= N) {
    dp[i] = Math.max(P + dp[nextConsult], dp[i + 1]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);
