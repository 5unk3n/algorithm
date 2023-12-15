const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const nodes = input.slice(1).map((v) => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
const parents = [];

for (let i = 0; i < N - 1; i++) {
  const [n1, n2] = nodes[i];

  graph[n1].push(n2);
  graph[n2].push(n1);
}

const dfs = (currNode, parentNode) => {
  parents[currNode] = parentNode;

  for (let i = 0; i < graph[currNode].length; i++) {
    const child = graph[currNode][i];
    if (child === parentNode) continue;
    dfs(child, currNode);
  }
};

dfs(1, 0);

console.log(parents.slice(2).join('\n'));
