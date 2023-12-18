const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);

if (N === 1) {
  numbers.sort((a, b) => a - b);
  const sum5 = numbers.reduce((acc, cur, idx) => (idx === 5 ? acc : acc + cur));
  console.log(sum5);
  return;
}

let result = Infinity;

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (j === 5 - i) continue;
    for (let k = j + 1; k < numbers.length; k++) {
      if (k === 5 - i || k === 5 - j) continue;

      const sidesOfDice = [numbers[i], numbers[j], numbers[k]].sort(
        (a, b) => a - b
      );

      const oneSide = (N * 5 - 6) * (N - 2) * sidesOfDice[0];
      const twoSides = (N * 2 - 3) * 4 * (sidesOfDice[0] + sidesOfDice[1]);
      const threeSides = 4 * (sidesOfDice[0] + sidesOfDice[1] + sidesOfDice[2]);

      const sum = oneSide + twoSides + threeSides;
      result = Math.min(result, sum);
    }
  }
}

console.log(result);
// 1면 => N^2 -( N * 4 - 4) +( N^2 - (N*3 - 2)) * 4 = 5N**2
// 5N^2 - 16N + 12 = 5N - 6 ( N - 2)
// 2면 => (N - 1) * 4 + (N - 2) * 4 = (2N - 3) * 4 /
// 3면 => 4

// A B C D E F
// 1 2 3 4 5 6
// x         x
//   x     x
//     x x
