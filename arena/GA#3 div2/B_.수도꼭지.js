const [input1, input2, input3, ...input4] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input1;
const A = input2.split(' ').map((v) => [Number(v), true]);
const Q = +input3;
const controls = input4.map((v) => v.split(' ').map(Number));

const result = [A.reduce((a, b) => (b[1] ? a + b[0] : a), 0)];

controls.forEach((v) => {
  const prevValue = A[v[1] - 1][1] ? A[v[1] - 1][0] : 0;

  if (v[0] === 1) {
    A[v[1] - 1][0] = v[2];
  } else {
    A[v[1] - 1][1] = !A[v[1] - 1][1];
  }

  const newValue = A[v[1] - 1][1] ? A[v[1] - 1][0] : 0;
  const prevWater = result[result.length - 1];
  const changedWater = prevWater + newValue - prevValue;
  result.push(changedWater);
});

console.log(result.join('\n'));
// 이전 결과값에서 변화값 증감하는 식으로 구현하기
