const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
const sortedArr = input
  .slice(1)
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);

let result = 0;
let current = 0;

sortedArr.forEach((v) => {
  const start = v[0];
  const end = v[1];

  if (current < start) {
    current = start;
  }

  while (current < end) {
    current += L;
    result++;
  }
});

console.log(result);
