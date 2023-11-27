const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const arr = input.slice(1).map((v) => v.split(' '));

console.log(
  arr
    .sort((a, b) => a[0] - b[0])
    .map((v) => v.join(' '))
    .join('\n')
);
