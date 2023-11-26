const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);

const max = Math.max(...arr);
const primeNumber = new Array(max + 1).fill(true);
primeNumber[0] = false;
primeNumber[1] = false;

for (let i = 2; i <= max; i++) {
  if (primeNumber[i]) {
    for (let j = i * 2; j <= max; j += i) {
      primeNumber[j] = false;
    }
  }
}

console.log(arr.reduce((acc, cur) => (primeNumber[cur] ? acc + 1 : acc), 0));
