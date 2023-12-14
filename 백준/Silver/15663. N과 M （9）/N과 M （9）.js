const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = [];

const combination = [];
const visited = [];

const solution = (idx) => {
  if (idx === M) {
    result.push(combination.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    combination[idx] = arr[i];
    solution(idx + 1);
    visited[i] = false;
  }
};

solution(0);

console.log(Array.from(new Set(result)).join('\n'));
