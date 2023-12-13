const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, M] = input.split(' ').map(Number);

const result = [];

const combination = [];

const solution = (idx, num) => {
  if (idx === M) {
    result.push(combination.join(' '));
    return;
  }

  for (let i = num; i <= N; i++) {
    combination[idx] = i;
    solution(idx + 1, i + 1);
  }
};

solution(0, 1);

console.log(result.join('\n'));
