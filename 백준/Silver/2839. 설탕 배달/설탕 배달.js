const input = +require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

let result = -1;

for (let i = Math.floor(input / 5); i >= 0; i--) {
  const rest = input - i * 5;

  if (rest / 3 === Math.floor(rest / 3)) {
    result = i + rest / 3;
    break;
  }
}

console.log(result);
