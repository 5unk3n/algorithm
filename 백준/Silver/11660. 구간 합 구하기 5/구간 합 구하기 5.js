const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const table = input.slice(1, 1 + N).map((v) => v.split(' ').map(Number));
const coords = input.slice(1 + N).map((v) => v.split(' ').map(Number));

const result = [];

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
dp[0][0] = table[0][0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === 0 && j === 0) continue;

    if (i === 0) {
      dp[i][j] = dp[i][j - 1] + table[i][j];
    } else if (j === 0) {
      dp[i][j] = dp[i - 1][j] + table[i][j];
    } else {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1] + table[i][j];
    }
  }
}

const solution = (dp, coord) => {
  const sum1 = dp[coord[0] - 2]?.[coord[1] - 2] || 0;
  const sum2 = dp[coord[0] - 2]?.[coord[3] - 1] || 0;
  const sum3 = dp[coord[2] - 1]?.[coord[1] - 2] || 0;
  const sum4 = dp[coord[2] - 1]?.[coord[3] - 1] || 0;

  return sum4 - sum3 - sum2 + sum1;
};

for (let i = 0; i < M; i++) {
  result.push(solution(dp, coords[i]));
}

console.log(result.join('\n'));
