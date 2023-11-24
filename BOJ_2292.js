const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let maxNumber = [1];

let increase = 6;

while (maxNumber[maxNumber.length - 1] < input) {
  maxNumber.push(maxNumber[maxNumber.length - 1] + increase);
  increase += 6;
}

console.log(maxNumber.length);
