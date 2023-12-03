const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [S, T] = input;
const arrT = T.split('');

while (S.length !== arrT.length) {
  const pop = arrT.pop();
  if (pop === 'B') {
    arrT.reverse();
  }
}

console.log(arrT.join('') === S ? 1 : 0);
