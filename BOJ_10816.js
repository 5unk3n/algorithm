const [N, A, M, B] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const arrA = A.split(' ').map(Number);
const arrB = B.split(' ').map(Number);
const result = [];
const mapA = new Map();

arrA.forEach((v) => mapA.set(v, (mapA.get(v) || 0) + 1));

arrB.forEach((v) => result.push(mapA.get(v) || 0));

console.log(result.join(' '));
