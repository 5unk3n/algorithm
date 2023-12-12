const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const members = input.slice(1, -1).map((v) => v.split(' ').map(Number));

const result = [];

const graph = members.reduce(
  (acc, cur) => {
    const [v1, v2] = cur;
    acc[v1].push(v2);
    acc[v2].push(v1);
    return acc;
  },
  Array.from({ length: N + 1 }, () => [])
);

const bfs = (graph, number) => {
  const queue = [];
  const visited = Array.from({ length: N + 1 }, () => false);
  let maxDistance = 0;

  queue.push([number, 0]);

  while (queue.length) {
    const [currNumber, distance] = queue.shift();

    if (visited[currNumber]) continue;

    visited[currNumber] = true;
    maxDistance = distance;

    graph[currNumber].forEach((nextNumber) => {
      queue.push([nextNumber, distance + 1]);
    });
  }

  return maxDistance;
};

for (let i = 1; i <= N; i++) {
  result.push(bfs(graph, i));
}

const minDistance = Math.min(...result);
const candidates = result.reduce((acc, cur, idx) => {
  if (cur === minDistance) {
    acc.push(idx + 1);
  }
  return acc;
}, []);

console.log(`${minDistance} ${candidates.length}`);
console.log(candidates.join(' '));
