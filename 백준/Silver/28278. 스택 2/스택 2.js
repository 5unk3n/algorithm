const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const stack = [];
const result = [];

const command = (line) => {
  const [cmd, number] = line.split(' ');

  switch (cmd) {
    case '1':
      stack.push(number);
      break;
    case '2':
      const popNumber = stack.pop();
      result.push(popNumber || -1);
      break;
    case '3':
      result.push(stack.length);
      break;
    case '4':
      stack.length === 0 ? result.push(1) : result.push(0);
      break;
    case '5':
      const lastNumber = stack[stack.length - 1];
      result.push(lastNumber || -1);
  }
};

input.forEach((line) => command(line));

console.log(result.join('\n'));
