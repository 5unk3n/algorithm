const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const An = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const Am = input[3].split(' ').map(Number);

const result = [];

Am.forEach((v) => {
  let start = 0;
  let end = An.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (v < An[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (v === An[mid]) {
    result.push(1);
  } else {
    result.push(0);
  }
});

console.log(result.join('\n'));
