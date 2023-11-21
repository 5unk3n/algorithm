const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const result = [];

const cantorSet = (n) => {
  return n === 0
    ? '-'
    : cantorSet(n - 1) + ' '.repeat(3 ** (n - 1)) + cantorSet(n - 1);
};

input.forEach((n) => result.push(cantorSet(n)));

console.log(result.join('\n'));
