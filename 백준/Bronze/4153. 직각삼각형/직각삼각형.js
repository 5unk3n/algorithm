const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const rightTriangle = (a, b, c) => {
  if (a ** 2 + b ** 2 === c ** 2) return 'right';
  if (a ** 2 + c ** 2 === b ** 2) return 'right';
  if (b ** 2 + c ** 2 === a ** 2) return 'right';
  return 'wrong';
};

input.forEach(
  (v, i) =>
    i === input.length - 1 || console.log(rightTriangle(v[0], v[1], v[2]))
);
