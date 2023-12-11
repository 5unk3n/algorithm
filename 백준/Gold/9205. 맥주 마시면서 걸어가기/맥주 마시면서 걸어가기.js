const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const t = +input[0];
const testCases = input.slice(1);

const result = [];

const bfs = (map) => {
  const queue = [];
  const visited = Array.from({ length: map.length }, () => false);

  queue.push(map[0]);

  while (queue.length) {
    const [currX, currY] = queue.shift();

    for (let i = 1; i < map.length; i++) {
      const [nextX, nextY] = map[i];

      const distance = Math.abs(nextX - currX) + Math.abs(nextY - currY);

      if (distance <= 1000 && visited[i] === false) {
        visited[i] = true;
        queue.push(map[i]);
      }
    }
  }

  return visited[map.length - 1] ? 'happy' : 'sad';
};

for (let i = 0; i < testCases.length; i++) {
  const n = +testCases[i];
  const map = testCases
    .slice(i + 1, i + n + 3)
    .map((v) => v.split(' ').map(Number));

  result.push(bfs(map));

  i += n + 2;
}

console.log(result.join('\n'));
