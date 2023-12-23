const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const testCases = input.slice(1).map((v) => v.split(' ').map(Number));

const result = [];

const bfs = (testCase) => {
  const [A, B] = testCase;

  const queue = [];
  const visited = Array.from({ length: 10000 }, () => false);
  queue.push([A, '']);
  visited[A] = true;

  while (queue.length > 0) {
    let [current, commands] = queue.shift();

    if (current === B) {
      return commands;
    }

    const nextD = (current * 2) % 10000;
    if (!visited[nextD]) {
      queue.push([nextD, commands + 'D']);
      visited[nextD] = true;
    }
    const nextS = current > 0 ? current - 1 : 9999;
    if (!visited[nextS]) {
      queue.push([nextS, commands + 'S']);
      visited[nextS] = true;
    }
    const nextL = (current % 1000) * 10 + Math.floor(current / 1000);
    if (!visited[nextL]) {
      queue.push([nextL, commands + 'L']);
      visited[nextL] = true;
    }
    const nextR = (current % 10) * 1000 + Math.floor(current / 10);
    if (!visited[nextR]) {
      queue.push([nextR, commands + 'R']);
      visited[nextR] = true;
    }
  }
};

testCases.forEach((testCase) => {
  result.push(bfs(testCase));
});

console.log(result.join('\n'));
