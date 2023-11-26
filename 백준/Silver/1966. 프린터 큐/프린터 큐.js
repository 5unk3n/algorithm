const [N, ...testCase] = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const testCaseArr = testCase.map((v) => v.split(' ').map(Number));

const print = (N, M, queue) => {
  let index = M;

  while (index >= 0) {
    if (queue[0] === Math.max(...queue)) {
      queue.shift();
      index--;
    } else {
      queue.push(queue.shift());
      if (index === 0) {
        index = queue.length - 1;
      } else {
        index--;
      }
    }
  }

  return N - queue.length;
};

for (let i = 0; i < N; i++) {
  console.log(
    print(testCaseArr[i * 2][0], testCaseArr[i * 2][1], testCaseArr[i * 2 + 1])
  );
}
