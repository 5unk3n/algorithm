const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const initBulb = input[1].split('').map(Number);
const targetBulb = input[2].split('').map(Number);

let result = Infinity;

const solution = (startIndex) => {
  const initBulbCopy = [...initBulb];
  let toggleCount = 0;

  if (startIndex === 0) {
    initBulbCopy[0] = 1 - initBulbCopy[0];
    initBulbCopy[1] = 1 - initBulbCopy[1];
    toggleCount++;
  }

  for (let i = 1; i < N; i++) {
    if (initBulbCopy[i - 1] !== targetBulb[i - 1]) {
      for (let j = i - 1; j <= i + 1; j++) {
        initBulbCopy[j] = 1 - initBulbCopy[j];
      }
      toggleCount++;
    }
  }

  for (let i = 0; i < N; i++) {
    if (initBulbCopy[i] !== targetBulb[i]) {
      return Infinity;
    }
  }

  return toggleCount;
};

result = Math.min(result, solution(0));
result = Math.min(result, solution(1));

console.log(result === Infinity ? -1 : result);
