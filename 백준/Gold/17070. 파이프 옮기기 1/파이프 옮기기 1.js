const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const map = input.slice(1).map((v) => v.split(' ').map(Number));

let result = 0;

// 가로, 대각, 세로
const dRow = [0, 1, 1];
const dCol = [1, 1, 0];

const dfs = (map, row, col, direction) => {
  if (row === N - 1 && col === N - 1) {
    result++;
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (Math.abs(direction - i) > 1) continue;
    const nRow = row + dRow[i];
    const nCol = col + dCol[i];

    if (nRow < N && nCol < N && map[nRow][nCol] !== 1) {
      if (
        i === 1 &&
        (map[row + dRow[0]][col + dCol[0]] || map[row + dRow[2]][col + dCol[2]])
      )
        continue;
      dfs(map, nRow, nCol, i);
    }
  }
};

dfs(map, 0, 1, 0);

console.log(result);
