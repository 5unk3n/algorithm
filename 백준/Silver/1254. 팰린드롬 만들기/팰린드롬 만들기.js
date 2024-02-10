const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

for (let i = 0; i < input.length; i++) {
  let isPalindrome = false;

  for (let j = i; j < (i + input.length) / 2; j++) {
    const rightIdx = i + input.length - j - 1;
    if (input[j] === input[rightIdx]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }

    if (!isPalindrome) {
      break;
    }

    if (j === Math.ceil((i + input.length) / 2 - 1) && isPalindrome) {
      console.log(i + input.length);
      return;
    }
  }
}
