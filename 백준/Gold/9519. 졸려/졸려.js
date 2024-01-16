const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const X = +input[0];
let word = input[1];

const cycle = [word];

for (let i = 0; i < X; i++) {
  let str = '';

  for (let j = 0; j < word.length; j += 2) {
    str += word[j];
  }
  for (
    let j = word.length % 2 ? word.length - 2 : word.length - 1;
    j >= 0;
    j -= 2
  ) {
    str += word[j];
  }

  word = str;
  if (cycle[0] === word) {
    break;
  } else {
    cycle.push(word);
  }
}

console.log(cycle[X % cycle.length]);
