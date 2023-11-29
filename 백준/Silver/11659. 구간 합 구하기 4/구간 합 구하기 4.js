const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const testCase = input.slice(2).map((v) => v.split(' ').map(Number));
const result = [];

const sum = [...numbers];
for (let i = 1; i < N; i++) {
  sum[i] += sum[i - 1];
}

testCase.forEach((v) => {
  const [i, j] = v;
  const a = sum[j - 1] || 0;
  const b = sum[i - 2] || 0;

  result.push(a - b);
});

console.log(result.join('\n'));
