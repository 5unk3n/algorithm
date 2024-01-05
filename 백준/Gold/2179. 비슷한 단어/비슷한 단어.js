const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const words = input.slice(1);

let max = 0;
const set = new Set();
const wordsIdx = {};
const sortedWords = [...words].sort((a, b) => a.localeCompare(b));

words.forEach((cur, idx) => {
  wordsIdx[cur] = idx;
});

for (let i = 0; i < N - 1; i++) {
  const curr = sortedWords[i];
  const next = sortedWords[i + 1];

  let len = 0;

  for (let j = 0; j < curr.length; j++) {
    if (curr[j] === next[j]) {
      len++;
    } else {
      break;
    }
  }

  if (len > max) {
    max = len;
    set.clear();
    set.add(curr);
    set.add(next);
  } else if (len === max) {
    set.add(curr);
    set.add(next);
  }
}

const maxArray = [];

set.forEach((v) => {
  maxArray.push([v, wordsIdx[v]]);
});

maxArray.sort((a, b) => a[1] - b[1]);

const result = maxArray.filter((cur, _, arr) =>
  cur[0].startsWith(arr[0][0].slice(0, max))
);

console.log(result[0][0]);
console.log(result[1][0]);
