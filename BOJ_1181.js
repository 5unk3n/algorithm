const [N, ...input] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const sortedInput = input.sort(
  (a, b) => a.length - b.length || a.localeCompare(b)
);
const deduplicatedInput = [...new Set(sortedInput)];

console.log(deduplicatedInput.join('\n'));
