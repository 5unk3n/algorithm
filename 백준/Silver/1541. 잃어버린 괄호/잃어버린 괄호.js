const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

if (input[0] === '-') {
  const result = input.split(/-|\+/g).reduce((acc, cur) => acc + +cur, 0);
  console.log(result);
} else {
  const splittedInput = input.split('-');
  const plusItem = splittedInput[0]
    .split('+')
    .reduce((acc, cur) => acc + +cur, 0);
  const minusItem = splittedInput
    .slice(1)
    .map((v) => v.split('+'))
    .flat()
    .reduce((acc, cur) => acc + +cur, 0);
  console.log(plusItem - minusItem);
}
