const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const map = input.slice(1).map((v) => v.split('').map(Number));

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const result = [];

const dfs = (map, row, col) => {
  map[row][col] = 0;

  let count = 1;

  for (let i = 0; i < 4; i++) {
    const nRow = row + dRow[i];
    const nCol = col + dCol[i];

    if (
      nRow >= 0 &&
      nRow < N &&
      nCol >= 0 &&
      nCol < N &&
      map[nRow][nCol] !== 0
    ) {
      count += dfs(map, nRow, nCol, result);
    }
  }

  return count;
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (map[row][col] === 0) continue;
    result.push(dfs(map, row, col));
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
