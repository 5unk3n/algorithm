const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [A, B] = input.split(' ').map(Number);

const sqrtB = Math.sqrt(B);
const primeNumber = Array.from({ length: sqrtB + 1 }, () => true);

for (let i = 2; i <= sqrtB; i++) {
  if (!primeNumber[i]) continue;

  for (let j = 2; i * j <= sqrtB; j++) {
    primeNumber[i * j] = false;
  }
}

let result = 0;

for (let i = 2; i <= sqrtB; i++) {
  if (!primeNumber[i]) continue;

  for (let j = 2; i ** j <= B; j++) {
    if (i ** j >= A) {
      result++;
    }
  }
}

console.log(result);
