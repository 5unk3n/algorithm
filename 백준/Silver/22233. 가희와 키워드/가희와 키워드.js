const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const memo = input.slice(1, 1 + N);
const blog = input.slice(1 + N).map((v) => v.split(','));

const set = new Set(memo);

const result = [];

blog.forEach((post) => {
  post.forEach((keyword) => {
    set.delete(keyword);
  });
  result.push(set.size);
});

console.log(result.join('\n'));
