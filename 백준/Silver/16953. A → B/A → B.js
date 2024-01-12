const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [A, B] = input.split(' ').map(Number);

const bfs = (startNum) => {
  const queue = [[startNum, 1]];

  while (queue.length) {
    const [num, time] = queue.shift();

    const double = num * 2;
    const plusOne = num + '1';

    if (double == B || plusOne == B) {
      return time + 1;
    }

    if (double <= B) {
      queue.push([double, time + 1]);
    }
    if (plusOne <= B) {
      queue.push([plusOne, time + 1]);
    }
  }

  return -1;
};

console.log(bfs(A));
