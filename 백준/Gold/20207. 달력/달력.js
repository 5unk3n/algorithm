const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const schedule = input.slice(1).map((v) => v.split(' ').map(Number));
const MAX = 1000;

const calendar = Array.from({ length: MAX + 2 }, () => 0);

schedule.forEach((v) => {
  for (let i = v[0]; i <= v[1]; i++) {
    calendar[i]++;
  }
});

let area = 0;
let length = 0;
let width = 0;

for (let i = 1; i <= MAX; i++) {
  if (calendar[i] === 0) {
    area += length * width;
    length = 0;
    width = 0;
  } else {
    length++;
    width = Math.max(width, calendar[i]);
  }
}

console.log(area);
