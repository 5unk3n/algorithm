const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let result = 0;

let num = 0;

while (result <= +input) {
  if (num > 9876543210) {
    console.log(-1);
    return;
  }

  const strNum = num.toString();
  let isDecreasing = true;

  for (let i = 0; i < strNum.length - 1; i++) {
    if (strNum[i] <= strNum[i + 1]) {
      isDecreasing = false;
      num = (+strNum.slice(0, i + 1) + 1) * 10 ** (strNum.length - i - 1);
      break;
    }
  }

  if (isDecreasing) {
    num++;
    result++;
  }
}

console.log(num - 1);
