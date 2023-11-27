const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const computers = +input[0];
const connections = +input[1];
const connectionInfo = input
  .slice(2, 2 + connections)
  .map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: computers + 1 }, () => []);
const visited = new Array(computers + 1).fill(false);

connectionInfo.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const dfs = (v) => {
  visited[v] = true;

  graph[v].forEach((i) => {
    if (!visited[i]) {
      dfs(i);
    }
  });
};

dfs(1);

console.log(visited.reduce((acc, cur) => (cur ? acc + 1 : acc), -1));
