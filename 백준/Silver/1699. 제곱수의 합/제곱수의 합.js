const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const N = +input;

const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  dp[i] = i;
  for (let j = 1; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[N]);

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
// 1 2 3 1 2 3 4 2 1 2  3  2  3  3  4  1

// 1 11 111 4 41 411 4111
