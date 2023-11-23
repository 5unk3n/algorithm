const [n, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stack = [];
let currentValue = 1;

const result = [];
let isPossible = true;

input.forEach((v) => {
  while (currentValue <= v) {
    stack.push(currentValue);
    currentValue++;
    result.push('+');
  }

  if (stack[stack.length - 1] === v) {
    stack.pop();
    result.push('-');
  } else {
    isPossible = false;
    return;
  }
});

console.log(isPossible ? result.join('\n') : 'NO');
