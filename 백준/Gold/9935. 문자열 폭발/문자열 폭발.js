const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const str = input[0];
const boom = input[1];

const stack = [];

for (let i = 0; i < str.length; i++) {
  const curr = str[i];
  stack.push(curr);

  if (stack[stack.length - 1] === boom[boom.length - 1]) {
    let lastStringOfStack = '';
    for (let i = stack.length - boom.length; i < stack.length; i++) {
      lastStringOfStack += stack[i];
    }

    if (lastStringOfStack === boom) {
      for (let i = 0; i < boom.length; i++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.join('') || 'FRULA');
