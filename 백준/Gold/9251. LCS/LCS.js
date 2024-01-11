const [input1, input2] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const dp = Array.from({ length: input1.length + 1 }, () =>
  Array.from({ length: input2.length + 1 }, () => 0)
);

for (let i = 0; i < input1.length; i++) {
  for (let j = 0; j < input2.length; j++) {
    if (input1[i] === input2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
}

console.log(dp[input1.length][input2.length]);
