const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const numberOfTree = input.length;
const treeMap = new Map();

const result = [];

input.forEach((tree) => {
  if (treeMap.has(tree)) {
    treeMap.set(tree, treeMap.get(tree) + 1);
  } else {
    treeMap.set(tree, 1);
  }
});

const treeArr = [...treeMap.keys()].sort();

treeArr.forEach((tree) => {
  const ratio = ((treeMap.get(tree) / numberOfTree) * 100).toFixed(4);
  result.push(`${tree} ${ratio}`);
});

console.log(result.join('\n'));
