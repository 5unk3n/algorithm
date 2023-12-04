const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const map = input.slice(1);

const abnormalMap = map.map((v) =>
  v.split('').map((v2) => (v2 === 'B' ? 'A' : 'B'))
);

const visitedNormal = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0)
);
const visitedAbnormal = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0)
);

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

let areaNormal = 0;
let areaAbnormal = 0;

const dfs = (map, row, col, visited) => {
  visited[row][col] = 1;
  const color = map[row][col];

  for (let i = 0; i < 4; i++) {
    const nRow = row + dRow[i];
    const nCol = col + dCol[i];

    if (
      nRow >= 0 &&
      nRow < N &&
      nCol >= 0 &&
      nCol < N &&
      map[nRow][nCol] === color &&
      visited[nRow][nCol] !== 1
    ) {
      dfs(map, nRow, nCol, visited);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visitedNormal[i][j]) {
      dfs(map, i, j, visitedNormal);
      areaNormal++;
    }
    if (!visitedAbnormal[i][j]) {
      dfs(abnormalMap, i, j, visitedAbnormal);
      areaAbnormal++;
    }
  }
}

console.log(areaNormal + ' ' + areaAbnormal);
