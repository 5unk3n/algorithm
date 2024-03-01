const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const hexagon = input.slice(1).map((v) => v.split(''));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (hexagon[i][j] === 0) continue;

    if (hexagon[i][j] === 'R') {
      if (hexagon[i + 1]?.[j] === 'R' && hexagon[i + 1]?.[j + 1] === 'R') {
        hexagon[i + 1][j] = 0;
        hexagon[i + 1][j + 1] = 0;
      } else {
        console.log(0);
        return;
      }
    } else {
      if (hexagon[i]?.[j + 1] === 'B' && hexagon[i + 1]?.[j + 1] === 'B') {
        hexagon[i][j + 1] = 0;
        hexagon[i + 1][j + 1] = 0;
      } else {
        console.log(0);
        return;
      }
    }
  }
}

console.log(1);
