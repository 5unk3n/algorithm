const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const ladderAndSnake = input.slice(1).map((v) => v.split(' '));

const LnSMap = new Map();
ladderAndSnake.forEach((v) => {
  const [start, arrival] = v;
  LnSMap.set(start, arrival);
});

const visited = Array.from({ length: 101 }, () => false);

const bfs = () => {
  const queue = [[1, 0]];

  while (queue.length) {
    const [curr, time] = queue.shift();

    for (let i = 1; i <= 6; i++) {
      const next = curr + i;

      if (next <= 100 && !visited[next]) {
        if (next === 100) {
          console.log(time + 1);
          return;
        }

        if (LnSMap.has(next.toString())) {
          const nextAndRide = +LnSMap.get(next.toString());
          queue.push([nextAndRide, time + 1]);
          visited[nextAndRide] = true;
        } else {
          queue.push([next, time + 1]);
          visited[next] = true;
        }
      }
    }
  }
};
bfs();
