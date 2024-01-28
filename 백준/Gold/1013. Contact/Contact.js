const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1);

const regex = /^(100+1+|01)+$/;

const result = testCases.map((v) => (regex.test(v) ? 'YES' : 'NO'));

console.log(result.join('\n'));
