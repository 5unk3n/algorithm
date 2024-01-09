const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1);

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const alphabet = Array.from({ length: 26 }, () => false);
alphabet[board[0][0].charCodeAt() - 65] = true;

let max = 0;

const dfs = (row, col, count) => {
  max = Math.max(max, count);

  for (let i = 0; i < 4; i++) {
    const nr = row + dr[i];
    const nc = col + dc[i];

    if (
      nr >= 0 &&
      nr < R &&
      nc >= 0 &&
      nc < C &&
      !alphabet[board[nr][nc].charCodeAt() - 65]
    ) {
      alphabet[board[nr][nc].charCodeAt() - 65] = true;
      dfs(nr, nc, count + 1);
      alphabet[board[nr][nc].charCodeAt() - 65] = false;
    }
  }
};
dfs(0, 0, 1);

console.log(max);
