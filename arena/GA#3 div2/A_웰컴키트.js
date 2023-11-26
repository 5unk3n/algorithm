const [input1, input2, input3] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input1;
const applicant = input2.split(' ').map(Number);
const [T, P] = input3.split(' ').map(Number);

const tShirts = applicant.reduce((acc, cur) => acc + Math.ceil(cur / T), 0);
const pen = [Math.floor(N / P), N % P];

console.log(tShirts);
console.log(pen.join(' '));
