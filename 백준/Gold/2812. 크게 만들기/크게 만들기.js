const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const number = input[1];

const stack = [];
let removeCount = 0;

for (let curr of number) {
  while (removeCount < K && stack[stack.length - 1] < curr) {
    stack.pop();
    removeCount++;
  }

  stack.push(curr);
}

if (removeCount < K) {
  for (let i = 0; i < K - removeCount; i++) {
    stack.pop();
  }
}

console.log(stack.join(''));
