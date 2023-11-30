const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCase = input.slice(1);
const result = [];

const solution = (p, n, x) => {
  const slicedX = x.slice(1, x.length - 1);
  const arrX = slicedX.split(',');

  let isReverse = false;
  let startIdx = 0;
  let endIDx = 0;

  for (let item of p) {
    if (item === 'R') {
      isReverse = !isReverse;
    } else if (item === 'D') {
      isReverse ? endIDx++ : startIdx++;
    }
  }

  const resultSlicedX = arrX.slice(startIdx, endIDx ? -endIDx : undefined);
  isReverse && resultSlicedX.reverse();

  if (startIdx + endIDx > n) return 'error';
  return `[${resultSlicedX.join(',')}]`;
};

for (let i = 0; i < T; i++) {
  const [p, n, x] = testCase.slice(i * 3, i * 3 + 3);

  result.push(solution(p, n, x));
}

console.log(result.join('\n'));
