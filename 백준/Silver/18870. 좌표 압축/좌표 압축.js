const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const X = input[1].split(' ').map(Number);

const sortedX = [...new Set(X)].sort((a, b) => a - b);
const pressedX = {};

sortedX.forEach((v, i) => (pressedX[v] = i));

const result = X.map((v) => pressedX[v]);

console.log(result.join(' '));
