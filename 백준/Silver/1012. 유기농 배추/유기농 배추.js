const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];

const result = [];

const solution = (map, W, H) => {
  const dRow = [-1, 0, 1, 0];
  const dCol = [0, 1, 0, -1];
  let sum = 0;

  const dfs = (map, row, col) => {
    map[row][col] = 0;
    for (let i = 0; i < 4; i++) {
      if (map[row + dRow[i]]?.[col + dCol[i]]) {
        dfs(map, row + dRow[i], col + dCol[i]);
      }
    }
  };

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (map[i][j] === 0) continue;
      dfs(map, i, j);
      sum++;
    }
  }

  return sum;
};

for (let i = 1; i < input.length; i++) {
  const [M, N, K] = input[i].split(' ').map(Number);
  const map = Array.from(Array(N), () => Array(M).fill(0));
  const cabbage = input.slice(i + 1, i + 1 + K).map((v) => v.split(' '));
  cabbage.forEach((v) => (map[v[1]][v[0]] = 1));

  result.push(solution(map, M, N));
  i += K;
}

console.log(result.join('\n'));
