const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const L = +input[0];
const [ML, MK] = input[1].split(' ').map(Number);
const C = +input[2];
const zombies = input.slice(3).map(Number);

const restoreDamage = new Array(L).fill(false);
let damage = 0;
let leftC = C;

for (let i = 0; i < L; i++) {
  if (i < ML || restoreDamage[i]) {
    damage += MK;
  }

  if (zombies[i] > damage) {
    leftC--;
    damage -= MK;
    restoreDamage[i + ML] = true;
  }
}

console.log(leftC < 0 ? 'NO' : 'YES');
