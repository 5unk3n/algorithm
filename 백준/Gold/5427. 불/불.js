const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const testCases = input.slice(1);

const result = [];

const dRow = [-1, 0, 1, 0];
const dCol = [0, 1, 0, -1];

const bfs = (map, width, height) => {
  const queue = [];
  const visited = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => false)
  );

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const current = map[i][j];
      if (current === '*' || current === '@') {
        if (
          current === '@' &&
          (i === 0 || i === height - 1 || j === 0 || j === width - 1)
        ) {
          return 1;
        }
        queue.push([i, j, current, 1]);
        visited[i][j] = true;
      } else if (current === '#') {
        visited[i][j] = true;
      }
    }
  }
  queue.sort((a) => (a[2] === '@' ? 0 : -1));

  let queueIndex = 0;
  while (queue.length > queueIndex) {
    const [row, col, type, time] = queue[queueIndex++];

    for (let i = 0; i < 4; i++) {
      const nRow = row + dRow[i];
      const nCol = col + dCol[i];

      if (visited[nRow]?.[nCol] === false) {
        queue.push([nRow, nCol, type, time + 1]);
        visited[nRow][nCol] = true;

        if (
          type === '@' &&
          (nRow === 0 ||
            nRow === height - 1 ||
            nCol === 0 ||
            nCol === width - 1)
        ) {
          return time + 1;
        }
      }
    }
  }

  return 'IMPOSSIBLE';
};

for (let i = 0; i < testCases.length; i++) {
  const [width, height] = testCases[i].split(' ').map(Number);
  const map = testCases.slice(i + 1, i + 1 + height);

  result.push(bfs(map, width, height));

  i += height;
}

console.log(result.join('\n'));
