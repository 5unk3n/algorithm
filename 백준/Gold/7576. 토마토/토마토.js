const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split(' ').map(Number));

const dR = [-1, 0, 1, 0];
const dC = [0, 1, 0, -1];

const tomato = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      tomato.push([i, j]);
    }
  }
}

const bfs = () => {
  const queue = [];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  tomato.forEach((v) => {
    queue.push([v[0], v[1], 0]);
    visited[v[0]][v[1]] = true;
  });

  let minDay = 0;

  let queueIdx = 0;
  while (queue.length > queueIdx) {
    const [row, col, day] = queue[queueIdx++];
    minDay = day;

    for (let i = 0; i < 4; i++) {
      const nR = row + dR[i];
      const nC = col + dC[i];

      if (
        nR >= 0 &&
        nR < N &&
        nC >= 0 &&
        nC < M &&
        !visited[nR][nC] &&
        map[nR][nC] === 0
      ) {
        queue.push([nR, nC, day + 1]);
        visited[nR][nC] = true;
      }
    }
  }

  let isPossible = true;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && map[i][j] === 0) {
        isPossible = false;
      }
    }
  }

  return isPossible ? minDay : -1;
};

console.log(bfs());
