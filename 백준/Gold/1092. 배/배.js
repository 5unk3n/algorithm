const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const cranes = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const M = +input[2];
const boxes = input[3]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

if (cranes[0] < boxes[0]) {
  console.log(-1);
  return;
}

let result = 0;

while (boxes.length) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if (cranes[i] >= boxes[j]) {
        boxes.splice(j, 1);
        break;
      }
    }
  }
  result++;
}

console.log(result);
