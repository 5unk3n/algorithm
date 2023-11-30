const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);
const MAX = 100000;
const visited = Array.from({ length: MAX + 1 }, () => false);

const bfs = (n) => {
  const queue = [];
  queue.push(n);
  visited[n] = true;
  let time = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      if (curr === K) return time;

      const nextPos = [curr - 1, curr + 1, curr * 2];
      nextPos.forEach((v) => {
        if (v >= 0 && v <= MAX && !visited[v]) {
          queue.push(v);
          visited[v] = true;
        }
      });
    }

    time++;
  }
};

const result = bfs(N);

console.log(result);
