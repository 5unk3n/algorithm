const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const pattern = input[1];
const files = input.slice(2);

const splittedPattern = pattern.split('*');
const regex = new RegExp(`^${splittedPattern[0]}[a-z]*${splittedPattern[1]}$`);

const result = files.map((file) => {
  const isMatched = regex.test(file);
  return isMatched ? 'DA' : 'NE';
});

console.log(result.join('\n'));
