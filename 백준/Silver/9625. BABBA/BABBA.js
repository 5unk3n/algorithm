const K = +require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim();

const dp = Array.from({ length: K + 2 }, () => 0);
dp[0] = 0;
dp[1] = 1; // 안 눌렀을 때
dp[2] = 1; // 한 번 눌렀을 때

for (let i = 3; i < K + 2; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(`${dp[K - 1]} ${dp[K]}`);
