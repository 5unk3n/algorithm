const input = +require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const dp = Array.from({ length: input + 1 }, () => 0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= input; i++) {
  let min = Infinity;

  if (i % 3 === 0) min = Math.min(min, dp[i / 3]);
  if (i % 2 === 0) min = Math.min(min, dp[i / 2]);
  min = Math.min(min, dp[i - 1]);

  dp[i] = min + 1;
}

console.log(dp[input]);
