const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1);

const result = [];

const solution = (n, clothes) => {
  let result = 1;
  const clothObj = {};

  clothes.forEach((v) => {
    const [name, category] = v.split(' ');

    if (!clothObj[category]) {
      clothObj[category] = 1;
    } else {
      clothObj[category]++;
    }
  });

  for (const category in clothObj) {
    result *= clothObj[category] + 1;
  }
  result--;

  return result;
};

for (let i = 0; i < testCases.length; i++) {
  const n = +testCases[i];
  const testCase = testCases.slice(i, i + n + 1);
  const clothes = testCase.slice(1);

  result.push(solution(n, clothes));

  i += n;
}

console.log(result.join('\n'));
