const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
const leaks = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let currTape = 0;

leaks.forEach((leak) => {
  if (currTape < leak + 0.5) {
    result++;
    currTape = leak - 0.5 + L;
  }
});

console.log(result);
