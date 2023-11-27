const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const result = [0, 0];

const fib = (n) => {
  if (n === 1 || n === 2) {
    result[0]++;
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

const fibonacci = (n) => {
  const f = [1, 1];

  for (let i = 2; i < n; i++) {
    result[1]++;
    f.push(f[i - 2] + f[i - 1]);
  }

  return f[n - 1];
};

fib(input);
fibonacci(input);

console.log(result.join(' '));
