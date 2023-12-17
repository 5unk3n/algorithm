const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let result = new Set();

for (let currLength = 1; currLength <= input.length; currLength++) {
  for (let startIdx = 0; startIdx <= input.length - currLength; startIdx++) {
    result.add(input.slice(startIdx, startIdx + currLength));
  }
}

console.log(result.size);
