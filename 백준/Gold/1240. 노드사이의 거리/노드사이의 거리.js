const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const distance = input.slice(1, N).map((v) => v.split(' ').map(Number));
const pair = input.slice(N).map((v) => v.split(' ').map(Number));

const result = [];

const tree = {};

distance.forEach((v) => {
  const [n1, n2, dist] = v;

  if (tree[n1] === undefined) {
    tree[n1] = [[n2, dist]];
  } else {
    tree[n1].push([n2, dist]);
  }
  if (tree[n2] === undefined) {
    tree[n2] = [[n1, dist]];
  } else {
    tree[n2].push([n1, dist]);
  }
});

const solution = (testCase) => {
  const [start, end] = testCase;
  const queue = [[start, 0]];

  const visited = Array.from({ length: N + 1 }, () => false);
  visited[start] = true;

  while (queue.length) {
    const [curr, distSum] = queue.shift();

    if (curr === end) {
      return distSum;
    }

    tree[curr].forEach((v) => {
      const [next, dist] = v;
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, distSum + dist]);
      }
    });
  }
};

pair.forEach((v) => {
  result.push(solution(v));
});

console.log(result.join('\n'));
