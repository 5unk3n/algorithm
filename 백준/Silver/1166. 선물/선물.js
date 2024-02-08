const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, L, W, H] = input.split(' ').map(Number);

let min = 0;
let max = Math.min(L, W, H);

while (min <= max) {
  const mid = (min + max) / 2;
  const lCount = Math.floor(L / mid);
  const wCount = Math.floor(W / mid);
  const hCount = Math.floor(H / mid);

  const totalCount = lCount * wCount * hCount;

  if (totalCount >= N) {
    if (min === mid) {
      break;
    } else {
      min = mid;
    }
  } else {
    if (max === mid) {
      break;
    } else {
      max = mid;
    }
  }
}

console.log(max);
