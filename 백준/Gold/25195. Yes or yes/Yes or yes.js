const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1, 1 + M).map((v) => v.split(' ').map(Number));
const numOfFanClub = +input[1 + M];
const fanClub = input[2 + M].split(' ').map(Number);

const fanClubNode = Array.from({ length: N + 1 }, () => false);
const graph = {};

fanClub.forEach((fan) => {
  fanClubNode[fan] = true;
});

edges.forEach((edge) => {
  const [curr, next] = edge;
  if (graph[curr]) {
    graph[curr].push(next);
  } else {
    graph[curr] = [next];
  }
});

const dfs = (curr) => {
  let hasNoFanPath = false;

  if (fanClubNode[curr]) {
    return false;
  }

  if (graph[curr] === undefined && fanClubNode[curr] === false) {
    return true;
  }

  for (let i = 0; i < graph[curr].length; i++) {
    if (hasNoFanPath) {
      break;
    } else {
      const next = graph[curr][i];
      hasNoFanPath = dfs(next);
    }
  }

  return hasNoFanPath;
};

console.log(dfs(1) ? 'yes' : 'Yes');
