const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let result = '';

let tag = '';
let stack = [];
let isTag = false;

for (let i = 0; i < input.length; i++) {
  const cur = input[i];
  if (cur === '<') {
    isTag = true;
    tag += cur;
  } else if (cur === '>') {
    isTag = false;
    tag += cur;
    result += tag;
    tag = '';
  } else if (cur === ' ') {
    if (isTag) {
      tag += ' ';
    } else {
      while (stack.length) {
        result += stack.pop();
      }
      result += ' ';
    }
  } else {
    if (isTag) {
      tag += cur;
    } else {
      stack.push(cur);
      if (input[i + 1] === '<' || input[i + 1] === undefined) {
        while (stack.length) {
          result += stack.pop();
        }
      }
    }
  }
}

console.log(result);
