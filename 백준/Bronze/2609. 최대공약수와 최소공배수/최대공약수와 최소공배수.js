const [input1, input2] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const lcm = (number1, number2) => {
  return (number1 * number2) / gcd(number1, number2);
};

console.log(gcd(input1, input2), lcm(input1, input2));
