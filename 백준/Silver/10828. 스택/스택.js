const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop() || -1;
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.stack.length ? 0 : 1;
  }

  top() {
    return this.stack[this.stack.length - 1] || -1;
  }
}

const stack = new Stack();
const result = [];

input
  .map((v) => v.split(' '))
  .forEach((v) => {
    if (v[0] === 'push') stack.push(v[1]);
    else if (v[0] === 'pop') result.push(stack.pop());
    else if (v[0] === 'size') result.push(stack.size());
    else if (v[0] === 'empty') result.push(stack.empty());
    else if (v[0] === 'top') result.push(stack.top());
  });

console.log(result.join('\n'));
