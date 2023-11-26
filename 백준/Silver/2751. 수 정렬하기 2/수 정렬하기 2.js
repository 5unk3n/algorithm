const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join('\n')
);
