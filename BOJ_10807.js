const [a, b, c] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const func = (a, b, c) => {
  return b.split(' ').filter((v) => v === c).length;
};

console.log(func(a, b, c));
