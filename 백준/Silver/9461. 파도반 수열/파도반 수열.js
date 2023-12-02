const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1).map(Number);

const dp = [0, 1, 1, 1];

const result = [];

for (let i = 4; i <= 100; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

testCases.forEach((v) => result.push(dp[v]));

console.log(result.join('\n'));
