const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

if (input === 'P') {
  console.log('PPAP');
  return;
}

const stack = [];

let aCount = 0;
let ppapCount = 0;

for (let i = 0; i < input.length; i++) {
  const stackLastIndex = stack.length - 1;

  if (input[i] === 'A') {
    aCount++;
  }

  if (
    input[i] === 'P' &&
    stack[stackLastIndex] === 'A' &&
    stack[stackLastIndex - 1] === 'P' &&
    stack[stackLastIndex - 2] === 'P'
  ) {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.push(input[i]);
    ppapCount++;
  } else {
    stack.push(input[i]);
  }
}

console.log(stack.includes('A') || aCount < stack.length ? 'NP' : 'PPAP');
