const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n')

const N = +input[0]
const arr = input.slice(1).map(Number)

let result = 0;

for(let i = N - 2; i >= 0; i--){
  if(arr[i] >= arr[i+1]) {
    const newNum = arr[i+1] - 1
    result += arr[i] - newNum
    arr[i] = newNum
  }
}

console.log(result)