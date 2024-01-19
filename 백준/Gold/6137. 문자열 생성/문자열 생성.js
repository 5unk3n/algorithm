const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const S = input.slice(1);

let T = [];

let leftIdx = 0;
let rightIdx = N - 1;

while (leftIdx < rightIdx) {
  const leftStr = S[leftIdx];
  const rightStr = S[rightIdx];

  if (leftStr > rightStr) {
    T.push(rightStr);
    rightIdx--;
  } else if (leftStr < rightStr) {
    T.push(leftStr);
    leftIdx++;
  } else {
    let leftIdx2 = leftIdx + 1;
    let rightIdx2 = rightIdx - 1;

    while (leftIdx2 < rightIdx2 && S[leftIdx2] === S[rightIdx2]) {
      leftIdx2++;
      rightIdx2--;
    }

    if (leftIdx2 >= rightIdx2 || S[leftIdx2] > S[rightIdx2]) {
      T.push(S[rightIdx]);
      rightIdx--;
    } else {
      T.push(S[leftIdx]);
      leftIdx++;
    }
  }
}

if (leftIdx === rightIdx) {
  T.push(S[leftIdx]);
}

console.log(
  T.reduce((acc, cur, idx) => {
    if ((idx + 1) % 80 === 0) {
      return acc + cur + '\n';
    } else {
      return acc + cur;
    }
  }, '')
);
