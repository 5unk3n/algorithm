const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1).map((v) => v.split(''));

const hedgehogLoc = [];
const waterLoc = [];

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const bfs = (map, hedgehogLoc, waterLoc) => {
  const [hedgehogRow, hedgehogCol] = hedgehogLoc;

  const queue = [];
  waterLoc.forEach((v) => queue.push([...v, , 'water']));
  queue.push([hedgehogRow, hedgehogCol, 'hedgehog', 0]);

  while (queue.length) {
    const [row, col, type, time] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nRow = row + dRow[i];
      const nCol = col + dCol[i];

      if (map[nRow]?.[nCol]) {
        if (type === 'hedgehog') {
          if (map[nRow][nCol] === '.') {
            map[nRow][nCol] = 'S';
            queue.push([nRow, nCol, 'hedgehog', time + 1]);
          } else if (map[nRow][nCol] === 'D') {
            return time + 1;
          }
        } else {
          if (map[nRow][nCol] === '.' || map[nRow][nCol] === 'S') {
            map[nRow][nCol] = '*';
            queue.push([nRow, nCol, 'water']);
          }
        }
      }
    }
  }

  return 'KAKTUS';
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    const cur = map[i][j];
    if (cur === 'S') {
      hedgehogLoc.push(i, j);
    } else if (cur === '*') {
      waterLoc.push([i, j]);
    }
  }
}

console.log(bfs(map, hedgehogLoc, waterLoc));
