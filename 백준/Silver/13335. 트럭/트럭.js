const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [n, w, L] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

let time = 0;
const queue = Array.from({ length: w }, () => 0);

let idx = 0;

while (idx < n) {
  const truck = a[idx];

  queue.shift();
  const currL = queue.reduce((a, b) => a + b, 0);

  if (currL + truck <= L) {
    queue.push(truck);
    idx++;
  } else {
    queue.push(0);
  }

  time++;
}

console.log(time + w);
