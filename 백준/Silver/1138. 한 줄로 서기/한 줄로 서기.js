const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const line = input[1].split(' ').map(Number);

const result = [];

while (result.length !== N) {
  for (let i = 0; i < N; i++) {
    if (line[i] === 0) {
      result.push(i + 1);
      line[i] = -1;
      for (let j = 0; j < i; j++) {
        line[j]--;
      }
      break;
    }
  }
}

console.log(result.join(' '));
