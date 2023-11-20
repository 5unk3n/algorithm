const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const numberInput = input.map((v) => v.split(' ').map(Number));
let result = 0;
let prevEndTime = 0;

numberInput
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })
  .forEach((v) => {
    if (prevEndTime <= v[0]) {
      result++;
      prevEndTime = v[1];
    }
  });

console.log(result);
