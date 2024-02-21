const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split(' ').map(Number));

let result = 0;

const dR = [-1, -1, 0, 1, 1, 1, 0, -1];
const dC = [0, 1, 1, 1, 0, -1, -1, -1];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);

const dfs = (row, col, isMountaintop) => {
  visited[row][col] = true;

  for (let i = 0; i < 8; i++) {
    const nR = row + dR[i];
    const nC = col + dC[i];

    if (nR >= 0 && nR < N && nC >= 0 && nC < M) {
      if (map[nR][nC] > map[row][col]) {
        isMountaintop = false;
      }
      if (map[nR][nC] === map[row][col] && !visited[nR][nC]) {
        isMountaintop = dfs(nR, nC, isMountaintop) && isMountaintop;
      }
    }
  }

  return isMountaintop;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j]) continue;
    result += dfs(i, j, true);
  }
}

console.log(result);
