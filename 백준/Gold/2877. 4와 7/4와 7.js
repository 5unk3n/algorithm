const K = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

// 4 7
// 44 47 74 77
// 444 447 474 477 744 747 774 777
// 4444 4447 4474 4477 4744 4747 4774 4777

let num = 2;
let newK = K;

for (let i = 1; ; i++) {
  const currSum = 2 * (2 ** i - 1);
  const prevSum = 2 * (2 ** (i - 1) - 1);

  if (K <= currSum) {
    num = 2 ** i;
    newK = K - prevSum;
    break;
  }
}

let result = '';
let idx = newK;

while (num / 2 >= 1) {
  num /= 2;
  if (idx <= num) {
    result += 4;
  } else {
    result += 7;
    idx -= num;
  }
}

console.log(result);
