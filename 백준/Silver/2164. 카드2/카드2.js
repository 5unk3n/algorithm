const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let arr = Array.from({ length: input }, (_, i) => i + 1);

while (arr.length > 1) {
  if (arr.length % 2) {
    arr.shift();
    arr.push(arr.shift());
  } else {
    arr = arr.filter((_, i) => i % 2);
  }
}

console.log(arr[0]);
