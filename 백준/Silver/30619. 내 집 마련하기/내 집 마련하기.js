const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number);
const M = +input[2];
const queries = input.slice(3).map((v) => v.split(' ').map(Number));

const result = [];

queries.forEach((v) => {
  const [L, R] = v;
  const students = Array.from({ length: R - L + 1 }, (_, i) => L + i);
  let idx = 0;

  const newA = A.map((v) => {
    if (v >= L && v <= R) {
      const newValue = students[idx];
      idx++;
      return newValue;
    }
    return v;
  });

  result.push(newA.join(' '));
});

console.log(result.join('\n'));
