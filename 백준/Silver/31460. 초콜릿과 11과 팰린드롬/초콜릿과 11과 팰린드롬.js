const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = input[0];
const N = input.slice(1).map(Number);

const result = [];

const solution = (num) => {
  if (num % 2 === 0) {
    return '1'.repeat(num);
  }

  if (num === 1) {
    return '0';
  }

  if (((num - 1) / 2) % 2) {
    return '1'.repeat((num - 1) / 2) + '2' + '1'.repeat((num - 1) / 2);
  } else {
    return (
      '1'.repeat((num - 1) / 2 - 1) + '222' + '1'.repeat((num - 1) / 2 - 1)
    );
  }
};

N.forEach((v) => {
  result.push(solution(v));
});

console.log(result.join('\n'));
