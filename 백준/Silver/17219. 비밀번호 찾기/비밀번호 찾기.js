const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const siteAndPassword = input.slice(1, -M).map((v) => v.split(' '));
const toFind = input.slice(N + 1);

const siteAndPasswordMap = new Map(siteAndPassword);
const result = [];

toFind.forEach((v) => result.push(siteAndPasswordMap.get(v)));

console.log(result.join('\n'));
