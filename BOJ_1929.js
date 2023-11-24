const [M, N] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const array = Array(N + 1).fill(1);
array[0] = 0;
array[1] = 0;

for (let i = 2; i <= N; i++) {
  if (array[i] === 0) continue;
  for (let j = 2; j * i <= N; j++) {
    array[i * j] = 0;
  }
}

const result = array
  .map((v, i) => v === 1 && i)
  .filter((v, i) => v && i >= M && i <= N);

console.log(result.join('\n'));
