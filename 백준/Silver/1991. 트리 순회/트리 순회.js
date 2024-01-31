const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const nodes = input.slice(1).map((v) => v.split(' '));

const map = new Map();

nodes.forEach((node) => {
  map.set(node[0], [node[1], node[2]]);
});

const preOrder = (map, parent) => {
  if (parent === '.') {
    return '';
  }
  const children = map.get(parent);
  let result = parent;
  result += preOrder(map, children[0]);
  result += preOrder(map, children[1]);
  return result;
};

console.log(preOrder(map, 'A'));

const inOrder = (map, parent) => {
  if (parent === '.') {
    return '';
  }
  const children = map.get(parent);
  let result = inOrder(map, children[0]);
  result += parent;
  result += inOrder(map, children[1]);
  return result;
};
console.log(inOrder(map, 'A'));

const postOrder = (map, parent) => {
  if (parent === '.') {
    return '';
  }
  const children = map.get(parent);
  let result = postOrder(map, children[0]);
  result += postOrder(map, children[1]);
  result += parent;
  return result;
};
console.log(postOrder(map, 'A'));
