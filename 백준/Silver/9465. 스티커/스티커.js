const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1);

const result = [];

const solution = (n, stickers) => {
  const dp = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => 0)
  );
  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];
  dp[0][1] = stickers[1][0] + stickers[0][1];
  dp[1][1] = stickers[0][0] + stickers[1][1];

  for (let i = 2; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      const point = stickers[j][i];
      dp[j][i] = Math.max(dp[+!j][i - 2] + point, dp[+!j][i - 1] + point);
    }
  }

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
};

for (let i = 0; i < T; i++) {
  const testCase = testCases.slice(i * 3, i * 3 + 3);
  const n = +testCase[0];
  const stickers = testCase.slice(1).map((v) => v.split(' ').map(Number));

  result.push(solution(n, stickers));
}

console.log(result.join('\n'));
