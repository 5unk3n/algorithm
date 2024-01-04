const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const H = input[1].split(' ').map(Number);

const arrows = Array.from({ length: Math.max(...H) + 1 }, () => 0);

H.forEach((v) => {
  if (arrows[v] === 0) {
    arrows[v - 1]++;
  } else {
    arrows[v]--;
    arrows[v - 1]++;
  }
});

console.log(arrows.reduce((acc, cur) => acc + cur));
