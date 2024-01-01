const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split(' ').map(Number));

let virusOne = null;
let virusTwo = null;

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const bfs = (map, virusOne, virusTwo) => {
  const queue = [
    [...virusOne, 1, 0],
    [...virusTwo, 2, 0],
  ];

  map[virusOne[0]][virusOne[1]] = [1, 0];
  map[virusTwo[0]][virusTwo[1]] = [2, 0];

  let queueIdx = 0;
  while (queue.length > queueIdx) {
    const [row, col, type, time] = queue[queueIdx++];
    if (map[row][col][0] === 3) {
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const nRow = row + dRow[i];
      const nCol = col + dCol[i];

      if (nRow >= 0 && nRow < N && nCol >= 0 && nCol < M) {
        if (
          map[nRow][nCol] === -1 ||
          map[nRow][nCol]?.[0] === type ||
          (map[nRow][nCol] && map[nRow][nCol][1] !== time + 1)
        ) {
          continue;
        }

        if (map[nRow][nCol] === 0) {
          queue.push([nRow, nCol, type, time + 1]);
          map[nRow][nCol] = [type, time + 1];
        } else {
          map[nRow][nCol] = [3, time + 1];
        }
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const cur = map[i][j];
    if (cur === 1) {
      virusOne = [i, j];
    } else if (cur === 2) {
      virusTwo = [i, j];
    }
  }
}

bfs(map, virusOne, virusTwo);

const result = [0, 0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const cur = map[i][j]?.[0];
    if (cur === 1) {
      result[0]++;
    } else if (cur === 2) {
      result[1]++;
    } else if (cur === 3) {
      result[2]++;
    }
  }
}

console.log(result.join(' '));
