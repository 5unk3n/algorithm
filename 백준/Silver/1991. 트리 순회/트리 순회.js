const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const map = input
  .slice(1)
  .map((v) => v.split(' '))
  .reduce((acc, cur) => acc.set(cur[0], [cur[1], cur[2]]), new Map());

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
