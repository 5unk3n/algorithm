const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = input[0];
const testCases = input.slice(1).map((v) => v.split(' ').map(Number));

const result = [];

const solution = (testCase) => {
  const [X, Y, x, y] = testCase;
  let count = 0;

  const map = Array.from({ length: Y }, () =>
    Array.from({ length: X }, () => 0)
  );

  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (map[i][j] === 1) continue;

      count++;
      if (i + y < Y && j + x < X) {
        map[i + y][j + x] = 1;
      }
    }
  }

  return count;
};

testCases.forEach((testCase) => {
  result.push(solution(testCase));
});

console.log(result.join('\n'));
