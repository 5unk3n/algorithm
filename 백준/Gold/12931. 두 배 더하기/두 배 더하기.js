const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const B = input[1].split(' ').map(Number);

let result = 0;

while (B.reduce((a, b) => a + b)) {
  const isDoubled = B.reduce((a, b) => (b % 2 ? false : a), true);

  if (isDoubled) {
    B.forEach((v, i) => {
      B[i] /= 2;
    });
    result++;
  } else {
    B.forEach((v, i) => {
      if (v % 2) {
        B[i]--;
        result++;
      }
    });
  }
}

console.log(result);
