const [N, input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const inputArray = input.split(' ').map(Number);
const dp = [inputArray[0]];

for (let i = 1; i < inputArray.length; i++) {
  const curNumber = inputArray[i];
  const prevNumber = dp[i - 1];

  dp.push(Math.max(curNumber, prevNumber + curNumber));
}

console.log(Math.max(...dp));
