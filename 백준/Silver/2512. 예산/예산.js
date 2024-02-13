const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const provinces = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let total = +input[2];

for (let i = 0; i < N; i++) {
  const left = N - i;
  const budget = Math.floor(total / left);

  if (provinces[i] < budget) {
    total -= provinces[i];
  } else {
    console.log(budget);
    return;
  }
}

console.log(provinces[N - 1]);
