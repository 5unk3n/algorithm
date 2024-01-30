const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const K = +input[0];
const [W, H] = input[1].split(' ').map(Number);
const map = input.slice(2).map((v) => v.split(' ').map(Number));

const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => -1)
);

const bfs = () => {
  const queue = [[0, 0, 0, K]];
  visited[0][0] = K;

  while (queue.length) {
    const [row, col, time, horseCount] = queue.shift();

    if (row === H - 1 && col === W - 1) {
      return time;
    }

    for (let i = 0; i < 12; i++) {
      if (horseCount === 0 && i >= 4) break;
      const nR = row + move[i][0];
      const nC = col + move[i][1];

      if (nR >= 0 && nR < H && nC >= 0 && nC < W && map[nR][nC] === 0) {
        if (i >= 4 && visited[nR][nC] < horseCount - 1) {
          queue.push([nR, nC, time + 1, horseCount - 1]);
          visited[nR][nC] = horseCount - 1;
        } else if (i < 4 && visited[nR][nC] < horseCount) {
          queue.push([nR, nC, time + 1, horseCount]);
          visited[nR][nC] = horseCount;
        }
      }
    }
  }

  return -1;
};

console.log(bfs());
