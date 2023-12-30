const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const result = [];

const solution = (num) => {
  const subResult = [];

  const dfs = (expression, next) => {
    if (next > num) {
      if (eval(expression.replaceAll(' ', '')) === 0) {
        subResult.push(expression);
      }
      return;
    }

    dfs(expression + ' ' + next, next + 1);
    dfs(expression + '+' + next, next + 1);
    dfs(expression + '-' + next, next + 1);
  };

  dfs('1', 2);
  return subResult.join('\n');
};

input.forEach((cur, idx) => idx && result.push(solution(cur)));

console.log(result.join('\n\n'));
