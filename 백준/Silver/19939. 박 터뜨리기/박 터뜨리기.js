const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);

const sum = (K * (K + 1)) / 2;

if (sum > N) {
  console.log(-1);
  return;
}

if ((N - sum) % K) {
  console.log(K);
} else {
  console.log(K - 1);
}
