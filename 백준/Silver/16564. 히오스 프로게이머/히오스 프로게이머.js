const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const levels = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let min = 1;
let max = levels[N - 1] + K;

if (N === 1) {
  console.log(levels[0] + K);
  return;
}

while (min <= max) {
  const middle = Math.floor((min + max) / 2);
  const T = levels.reduce(
    (acc, cur) => (cur > middle ? acc : acc + middle - cur),
    0
  );
  // middle이 목표 레벨
  // T가 뭐냐? T는 목표레벨까지 올린 레벨의 합 => K보다 높을 수 없음
  // 같거나 낮으면 맥스 내려

  if (T <= K) {
    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(max);

// 10 20 15

// 0          20
//      11    20
//       16   20
//       1617
//         17       => 9
