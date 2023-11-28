const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const commands = input.slice(1);
const result = [];

commands.forEach((v) => {
  const stack = [];

  for (let i = 0; i < v.length; i++) {
    if (v[i] === '(') {
      stack.push(v[i]);
    } else if (v[i] === ')') {
      if (stack.length === 0) {
        result.push('NO');
        return;
      } else {
        stack.pop();
      }
    }
  }

  result.push(stack.length ? 'NO' : 'YES');
});

console.log(result.join('\n'));
