const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const pokemon = input.slice(1);

const encyclopedia = pokemon.slice(0, N);
const quiz = pokemon.slice(N);

const encyclopediaObj = {};

encyclopedia.forEach((v, i) => (encyclopediaObj[v] = i));

const result = quiz.map((v) => {
  if (isNaN(v)) {
    return encyclopediaObj[v] + 1;
  } else {
    return encyclopedia[v - 1];
  }
});

console.log(result.join('\n'));
