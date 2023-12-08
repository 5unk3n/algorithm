const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const words = input.slice(1);

const result = [];

const findNextWord = (word) => {
  let idx = null;

  for (let i = word.length - 1; i > 0; i--) {
    const currentChar = word[i];
    const nextChar = word[i - 1];

    if (currentChar.localeCompare(nextChar) > 0) {
      idx = i - 1;
      break;
    }
  }

  if (idx === null) {
    return word;
  }

  const leftWord = word.slice(0, idx);
  const rightWord = word
    .slice(idx)
    .split('')
    .sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < rightWord.length; i++) {
    if (word[idx].localeCompare(rightWord[i]) < 0) {
      rightWord.unshift(rightWord.splice(i, 1)[0]);
      break;
    }
  }

  return leftWord + rightWord.join('');
};

words.forEach((v) => result.push(findNextWord(v)));

console.log(result.join('\n'));
