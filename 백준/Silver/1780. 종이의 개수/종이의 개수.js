const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const paper = input.slice(1).map((v) => v.split(' ').map(Number));

const solution = (row, col, size) => {
  const initialValue = paper[row][col];
  let isSame = true;

  outer: for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (paper[i][j] !== initialValue) {
        isSame = false;
        break outer;
      }
    }
  }

  if (isSame) {
    return initialValue === -1
      ? [1, 0, 0]
      : initialValue === 0
      ? [0, 1, 0]
      : [0, 0, 1];
  }

  const nextSize = size / 3;
  const count = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const [minus, zero, plus] = solution(
        row + i * nextSize,
        col + j * nextSize,
        nextSize
      );
      count[0] += minus;
      count[1] += zero;
      count[2] += plus;
    }
  }

  return count;
};

console.log(solution(0, 0, N).join('\n'));
