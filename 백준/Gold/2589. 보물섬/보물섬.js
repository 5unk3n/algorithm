const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1);

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

let maxTime = 0;

const bfs = (map, startRow, startCol) => {
  const visited = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => false)
  );
  const queue = [];
  let time = 0;
  queue.push([startRow, startCol, time]);

  while (queue.length) {
    const [row, col, prevTime] = queue.shift();
    if (visited[row][col] || map[row][col] === 'W') continue;
    visited[row][col] = true;
    time = prevTime;

    for (let i = 0; i < 4; i++) {
      const nRow = row + dRow[i];
      const nCol = col + dCol[i];

      if (map[nRow]?.[nCol] === 'L') {
        queue.push([nRow, nCol, prevTime + 1]);
      }
    }
  }

  return time;
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    let time = bfs(map, i, j);
    maxTime = Math.max(maxTime, time);
  }
}

console.log(maxTime);
