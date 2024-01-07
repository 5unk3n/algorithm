const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1, N + 1).map((v) => v.split(' ').map(Number));
const K = +input[N + 1];
const areas = input.slice(N + 2).map((v) => v.split(' ').map(Number));

const result = [];

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);
dp[1][1] = map[0][0];

for (let i = 2; i <= N; i++) {
  dp[i][1] = dp[i - 1][1] + map[i - 1][0];
}
for (let i = 2; i <= M; i++) {
  dp[1][i] = dp[1][i - 1] + map[0][i - 1];
}

for (let i = 2; i <= N; i++) {
  for (let j = 2; j <= M; j++) {
    dp[i][j] =
      map[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
  }
}

areas.forEach((v) => {
  const [x1, y1, x2, y2] = v;

  const areaPopulation =
    dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1];

  result.push(areaPopulation);
});

console.log(result.join('\n'));
