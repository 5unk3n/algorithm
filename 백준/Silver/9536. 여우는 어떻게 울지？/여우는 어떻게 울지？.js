const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1);

const result = [];

const solution = (testCase) => {
  const record = testCase[0].split(' ');
  const animals = testCase.slice(1).map((v) => v.split(' ')[2]);

  const filteredRecord = record.filter((v) => {
    let isFox = true;

    for (const cry of animals) {
      if (v === cry) {
        isFox = false;
        break;
      }
    }

    return isFox;
  });

  return filteredRecord.join(' ');
};

for (let i = 0; i < testCases.length; i++) {
  const endIdx = testCases.slice(i).indexOf('what does the fox say?');

  const testCase = testCases.slice(i, i + endIdx);

  result.push(solution(testCase));

  i += endIdx;
}

console.log(result.join('\n'));
