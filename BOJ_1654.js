const [firstLine, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [K, N] = firstLine.split(' ').map(Number);
const lines = input.map(Number);

let min = 1;
let max = Math.max(...lines);

while (min <= max) {
  const middle = Math.floor((min + max) / 2);
  const count = lines.reduce((a, b) => a + Math.floor(b / middle), 0);

  if (count >= N) {
    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(max);
