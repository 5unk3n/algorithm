const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const A = input[1].split(' ');

A.sort((a, b) => {
  if (a + b > b + a) {
    return -1;
  } else {
    return 1;
  }
});

console.log(BigInt(A.join('')).toString());
