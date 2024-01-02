const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const entrance = input.slice(1, 1 + N);
const exit = input.slice(1 + N);

let result = 0;

const carIndex = exit.map((cur) => entrance.indexOf(cur));

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (carIndex[i] > carIndex[j]) {
      result++;
      break;
    }
  }
}

console.log(result);
