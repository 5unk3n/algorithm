const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: M }, () =>
  Array.from({ length: N }, () => null)
);

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const dfs = (row, col) => {
  if (row === M - 1 && col === N - 1) {
    return 1;
  }
  if (dp[row][col] !== null) {
    return dp[row][col];
  }

  dp[row][col] = 0;

  for (let i = 0; i < 4; i++) {
    const nRow = row + dRow[i];
    const nCol = col + dCol[i];

    if (
      nRow >= 0 &&
      nRow < M &&
      nCol >= 0 &&
      nCol < N &&
      map[nRow][nCol] < map[row][col]
    ) {
      dp[row][col] += dfs(nRow, nCol);
    }
  }

  return dp[row][col];
};

console.log(dfs(0, 0));
