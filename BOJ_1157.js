const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const obj = {};
let max = 0;
let result = '';

for (let char of input) {
  const upperCaseChar = char.toUpperCase();

  if (obj[upperCaseChar] === undefined) {
    obj[upperCaseChar] = 1;
  } else {
    obj[upperCaseChar]++;
  }

  max = Math.max(max, obj[upperCaseChar]);
}

for (let item in obj) {
  if (obj[item] === max) {
    result += item;
  }

  if (result.length > 1) {
    result = '?';
    break;
  }
}

console.log(result);
