const [N, r, c] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let result = 0;
let [R, C] = [r, c];

for (let i = N; i > 0; i--) {
  const maxValue = 2 ** (i * 2);
  const halfIndex = 2 ** i / 2;

  if (R >= halfIndex) {
    result += maxValue / 2;
    R -= halfIndex;
  }

  if (C >= halfIndex) {
    result += maxValue / 4;
    C -= halfIndex;
  }
}

console.log(result);
