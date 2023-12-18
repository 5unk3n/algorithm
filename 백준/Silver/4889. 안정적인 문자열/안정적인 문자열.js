const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const result = [];

const solution = (testCase) => {
  const stack = [];
  let incorrect = 0;

  for (let i = 0; i < testCase.length; i++) {
    const data = testCase[i];
    if (data === '{') {
      stack.push(data);
    } else if (data === '}') {
      if (stack.length) {
        stack.pop();
      } else {
        incorrect++;
        stack.push('{');
      }
    }
  }

  return incorrect + stack.length / 2;
};

for (let i = 0; i < input.length - 1; i++) {
  const testCase = input[i];
  result.push(`${i + 1}. ${solution(testCase)}`);
}

console.log(result.join('\n'));
