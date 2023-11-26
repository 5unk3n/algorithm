const [input1, input2] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input1;
const fruits = input2.split(' ').map(Number);

console.log(N, fruits);
