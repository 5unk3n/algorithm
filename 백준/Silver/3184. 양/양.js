const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1);

const result = [0, 0];
const visited = Array.from({ length: R }, () =>
  Array.from({ length: C }, () => false)
);

const dR = [-1, 0, 1, 0];
const dC = [0, 1, 0, -1];

const bfs = (startRow, startCol) => {
  const queue = [[startRow, startCol]];
  const sheepAndWolf = [0, 0];
  if (map[startRow][startCol] === 'o') {
    sheepAndWolf[0]++;
  } else if (map[startRow][startCol] === 'v') {
    sheepAndWolf[1]++;
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nR = row + dR[i];
      const nC = col + dC[i];

      if (
        nR >= 0 &&
        nR < R &&
        nC >= 0 &&
        nC < C &&
        !visited[nR][nC] &&
        map[nR][nC] !== '#'
      ) {
        if (map[nR][nC] === 'o') {
          sheepAndWolf[0]++;
        } else if (map[nR][nC] === 'v') {
          sheepAndWolf[1]++;
        }

        queue.push([nR, nC]);
        visited[nR][nC] = true;
      }
    }
  }

  if (sheepAndWolf[0] > sheepAndWolf[1]) {
    result[0] += sheepAndWolf[0];
  } else {
    result[1] += sheepAndWolf[1];
  }
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (visited[i][j] || map[i][j] === '#') continue;
    visited[i][j] = true;
    bfs(i, j);
  }
}

console.log(result.join(' '));
