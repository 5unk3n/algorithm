const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = input[0];
const exp = input.slice(1);

const result = [];

const solution = (exp) => {
  const len = exp.length;
  let numIdx = 0;

  for (let i = 0; i < len; i++) {
    if (!isNaN(exp[i])) {
      numIdx = i;
      break;
    }
  }

  let num = exp[numIdx];

  if (len > numIdx + 1) {
    num = 1;
  }

  if (numIdx % 2) {
    num = +!+num;
  }

  return num;
};

exp.forEach((v) => {
  result.push(solution(v));
});

console.log(result.join('\n'));
