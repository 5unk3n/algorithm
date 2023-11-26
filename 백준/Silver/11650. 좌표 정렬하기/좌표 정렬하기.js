const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const arr = input.map((v) => v.split(' ').map(Number));

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

console.log(arr.map((v) => v.join(' ')).join('\n'));
