const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const numbers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < N; i++) {
  const curr = numbers[i];
  const next = numbers[i + 1];

  if ((curr > 1 && next > 1) || (curr <= 0 && (N - i) % 2 === 0)) {
    result += curr * next;
    i++;
  } else {
    result += curr;
  }
}

console.log(result);
