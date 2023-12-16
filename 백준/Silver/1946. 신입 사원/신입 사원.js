const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1);

const result = [];

const solution = (N, testCase) => {
  const sortedRank = [...testCase].sort((a, b) => a[0] - b[0]);

  let maxInterviewRank = sortedRank[0][1];
  let count = 1;

  for (let i = 1; i < N; i++) {
    const currentInterviewRank = sortedRank[i][1];

    if (currentInterviewRank < maxInterviewRank) {
      maxInterviewRank = currentInterviewRank;
      count++;
    }
  }

  return count;
};

for (let i = 0; i < testCases.length; i++) {
  const N = +testCases[i];
  const testCase = testCases
    .slice(i + 1, i + 1 + N)
    .map((v) => v.split(' ').map(Number));

  result.push(solution(N, testCase));

  i += N;
}

console.log(result.join('\n'));
