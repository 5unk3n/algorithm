const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const testCase = input.slice(1);

const dp = Array.from({ length: N + 1 }, () => []);
dp[0] = [1, 0];
dp[1] = [0, 1];

const result = [];

for (let i = 2; i <= Math.max(...testCase); i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

testCase.forEach((v) => result.push(`${dp[v][0]} ${dp[v][1]}`));

console.log(result.join('\n'));
