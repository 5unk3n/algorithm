const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const words = input.slice(1);

const arr = Array.from({ length: 26 }, () => 0);

words.forEach((v) => {
  const padV = v.padStart(10, 0);

  for (let i = 0; i < 10; i++) {
    const curr = padV[i];

    if (curr === '0') continue;

    arr[curr.charCodeAt() - 65] += 10 ** (9 - i);
  }
});

const sortedArr = arr
  .map((cur, idx) => [cur, idx])
  .sort((a, b) => b[0] - a[0])
  .filter((v) => v[0])
  .map((cur, idx) => [9 - idx, cur[1]]);

const charToNum = {};

sortedArr.forEach((v) => {
  charToNum[String.fromCharCode(v[1] + 65)] = v[0];
});

const result = words.reduce((acc, cur) => {
  let converted = '';

  for (let i = 0; i < cur.length; i++) {
    converted += charToNum[cur[i]];
  }

  return acc + +converted;
}, 0);

console.log(result);
