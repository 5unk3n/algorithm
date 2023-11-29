const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1);

const result = [];

arr.sort((a, b) => a.localeCompare(b));

for (let i = 1; i < N + M; i++) {
  if (arr[i - 1] === arr[i]) {
    result.push(arr[i]);
  }
}

console.log(result.length);
console.log(result.join('\n'));
