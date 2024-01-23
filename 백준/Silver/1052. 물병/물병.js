const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);

const binary = N.toString(2);
let kLoc;

if (binary.split('').filter((v) => v === '1').length <= K) {
  console.log(0);
  return;
}

let bottle = 0;
for (let i = 0; i < binary.length; i++) {
  if (binary[i] === '1') {
    bottle++;
  }

  if (bottle === K) {
    kLoc = i;
    break;
  }
}

const targetNum = 2 ** (binary.length - kLoc);
const currentNum = parseInt(binary.slice(kLoc), 2);

console.log(targetNum - currentNum);
