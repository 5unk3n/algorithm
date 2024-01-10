const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let result = 0;
let stick = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stick++;
  } else {
    stick--;
    if (input[i - 1] === '(') {
      result += stick;
    } else {
      result++;
    }
  }
}

console.log(result);
