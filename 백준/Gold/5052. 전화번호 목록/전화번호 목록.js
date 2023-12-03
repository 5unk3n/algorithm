const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const t = +input[0];
const testCases = input.slice(1);
const result = [];

const solution = (n, phone) => {
  phone.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < phone.length - 1; i++) {
    if (phone[i + 1].startsWith(phone[i])) {
      return 'NO';
    }
  }

  return 'YES';
};

for (let i = 0; i < testCases.length; i++) {
  const n = +testCases[i];
  const phone = testCases.slice(i + 1, i + n + 1);
  if (phone.length === 1) {
    result.push('YES');
  } else {
    result.push(solution(n, phone));
  }
  i += n;
}

console.log(result.join('\n'));
