const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const map = input.slice(0, 5).map((v) => v.split(' ').map(Number));
const [r, c] = input[5].split(' ').map(Number);

let isPossible = false;

const dR = [-1, 0, 1, 0];
const dC = [0, 1, 0, -1];

const dfs = (startR, startC, apple, count) => {
  if (apple >= 2) {
    isPossible = true;
    return;
  }

  if (count >= 3) {
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nR = startR + dR[i];
    const nC = startC + dC[i];

    if (nR >= 0 && nR < 5 && nC >= 0 && nC < 5 && map[nR][nC] !== -1) {
      if (map[nR][nC] === 1) {
        map[nR][nC] = -1;
        dfs(nR, nC, apple + 1, count + 1);
        map[nR][nC] = 1;
      } else {
        dfs(nR, nC, apple, count + 1);
      }
    }
  }
};

map[r][c] = -1;
if (map[r][c] === 1) {
  dfs(r, c, 1, 0);
} else {
  dfs(r, c, 0, 0);
}

console.log(isPossible ? 1 : 0);
