const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C, T] = input[0].split(' ').map(Number);
let map = input.slice(1).map((v) => v.split(' ').map(Number));

const purifier = [];

for (let i = 0; i < R; i++) {
  if (map[i][0] === -1) {
    purifier.push(i);
  }
}

const diffuse = (map) => {
  const copiedMap = map.map((row) => [...row]);

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const currDust = copiedMap[i][j];
      if (currDust > 0) {
        const diffusionDust = Math.floor(currDust / 5);

        if (i !== 0 && map[i - 1]?.[j] !== -1) {
          map[i - 1][j] += diffusionDust;
          map[i][j] -= diffusionDust;
        }
        if (i !== R - 1 && map[i + 1]?.[j] !== -1) {
          map[i + 1][j] += diffusionDust;
          map[i][j] -= diffusionDust;
        }
        if (j !== 0 && map[i]?.[j - 1] !== -1) {
          map[i][j - 1] += diffusionDust;
          map[i][j] -= diffusionDust;
        }
        if (j !== C - 1 && map[i]?.[j + 1] !== -1) {
          map[i][j + 1] += diffusionDust;
          map[i][j] -= diffusionDust;
        }
      }
    }
  }
};

const circulate = (map, purifier) => {
  const [top, bottom] = purifier;

  // 1열
  for (let i = top - 2; i >= 0; i--) {
    map[i + 1][0] = map[i][0];
  }
  for (let i = bottom + 2; i < R; i++) {
    map[i - 1][0] = map[i][0];
  }

  // 1행, 끝행
  for (let i = 1; i < C; i++) {
    map[0][i - 1] = map[0][i];
    map[R - 1][i - 1] = map[R - 1][i];
  }

  // 8열
  for (let i = 1; i <= top; i++) {
    map[i - 1][C - 1] = map[i][C - 1];
  }
  for (let i = R - 2; i >= bottom; i--) {
    map[i + 1][C - 1] = map[i][C - 1];
  }

  // 청정기행
  for (let i = C - 2; i > 0; i--) {
    map[top][i + 1] = map[top][i];
    map[bottom][i + 1] = map[bottom][i];
  }
  map[top][1] = 0;
  map[bottom][1] = 0;
};

for (let i = 0; i < T; i++) {
  diffuse(map);
  circulate(map, purifier);
}

console.log(
  map.reduce((acc, cur) => acc + cur.reduce((acc2, cur2) => acc2 + cur2), 0) + 2
);
