const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let result = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let diff = 0;

    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if ((k + l) % 2 === 0) {
          if (board[k][l] !== 'W') diff++;
        } else {
          if (board[k][l] !== 'B') diff++;
        }
      }
    }

    diff = Math.min(diff, 64 - diff);
    result = Math.min(result, diff);
  }
}

console.log(result);
