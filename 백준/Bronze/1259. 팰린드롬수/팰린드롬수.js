const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => String(Number(v)));

const answer = [];

const solution = (number) => {
  let result = 'yes';

  for (let i = 0; i < Math.ceil(number.length / 2); i++) {
    if (number[i] !== number[number.length - 1 - i]) {
      result = 'no';
      break;
    }
  }

  return result;
};

input.forEach((v, i) => i === input.length - 1 || answer.push(solution(v)));

console.log(answer.join('\n'));
