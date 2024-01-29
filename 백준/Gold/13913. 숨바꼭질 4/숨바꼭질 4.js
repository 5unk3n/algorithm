const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const [N, K] = input.split(' ').map(Number);
const visited = Array.from({ length: 100001 }, () => false);

const bfs = (start) => {
  const queue = [[start, 0, start]];
  visited[start] = true;

  let queueIdx = 0;
  while (queue.length > queueIdx) {
    const [current, time, path] = queue[queueIdx++];

    if (current === K) {
      console.log(time);
      console.log(path);
      return;
    }

    if (current - 1 >= 0 && !visited[current - 1]) {
      queue.push([current - 1, time + 1, `${path} ${current - 1}`]);
      visited[current - 1] = true;
    }
    if (current + 1 <= 100000 && !visited[current + 1]) {
      queue.push([current + 1, time + 1, `${path} ${current + 1}`]);
      visited[current + 1] = true;
    }
    if (current * 2 <= 100000 && !visited[current * 2]) {
      queue.push([current * 2, time + 1, `${path} ${current * 2}`]);
      visited[current * 2] = true;
    }
  }
};

bfs(N);
