const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const map = input.slice(1, -1).map((v) => v.split(' ').map(Number));
const target = input[N + 1].split(' ').map(Number);

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const bfs = (map, target) => {
  const [S, X, Y] = target;

  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const virus = map[i][j];

      if (virus !== 0) {
        queue.push([virus, i, j, 0]);
        map[i][j] = [virus, 0];
      }
    }
  }
  queue.sort((a, b) => a[0] - b[0]);

  while (queue.length) {
    const [virus, row, col, time] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nRow = row + dRow[i];
      const nCol = col + dCol[i];

      if (
        nRow >= 0 &&
        nRow < N &&
        nCol >= 0 &&
        nCol < N &&
        map[nRow][nCol] === 0
      ) {
        queue.push([virus, nRow, nCol, time + 1]);
        map[nRow][nCol] = [virus, time + 1];
      }
    }
  }

  const [existVirus, createdTime] = map[X - 1][Y - 1];
  return createdTime <= S ? existVirus : 0;
};

console.log(bfs(map, target));
