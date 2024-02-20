const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const numbers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const count = Array.from({ length: 8001 }, (_, i) => [0, i - 4000]);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += numbers[i];
  count[numbers[i] + 4000][0]++;
}

const mean = Math.round(sum / N);
const median = numbers[Math.floor(N / 2)];
const mode =
  count.sort((a, b) => b[0] - a[0])[0][0] === count[1][0]
    ? count[1][1]
    : count[0][1];
const range = numbers[N - 1] - numbers[0];

console.log(mean || 0);
console.log(median);
console.log(mode);
console.log(range);
