const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [S, T] = input;

const transform = (str) => {
  let canTransform = 0;

  if (str.length === S.length) {
    if (str.join('') === S) {
      return 1;
    }
    return 0;
  }

  if (str[str.length - 1] === 'A') {
    canTransform = canTransform || transform(str.slice(0, -1));
  }
  if (str[0] === 'B') {
    canTransform = canTransform || transform(str.slice(1).reverse());
  }

  return canTransform;
};

console.log(transform(T.split('')));
