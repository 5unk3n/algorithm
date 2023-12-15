const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, M] = input.split(' ').map(Number);

const result = [];

const combination = [];

const solution = (num, idx) => {
  if (idx === M) {
    result.push(combination.join(' '));
    return;
  }

  for (let i = num; i <= N; i++) {
    combination[idx] = i;
    solution(i, idx + 1);
  }
};

solution(1, 0);

console.log(result.join('\n'));
