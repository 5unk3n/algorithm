const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M, Q] = input[0].split(' ').map(Number);
const companies = input
  .slice(1, 1 + N)
  .map((v) => v.split(' ').map((v) => (isNaN(v) ? v : +v)));
const menu = input.slice(1 + N).map((v) => v.split(' '));

const result = [];
const myStock = {};

menu.forEach((menuLine) => {
  const [menuNum, opt1, opt2] = menuLine;

  switch (menuNum) {
    case '1': {
      const company = companies.find((v) => v[1] === opt1);
      const companyName = company[1];
      const stockPrice = company[2];
      const buyingPrice = stockPrice * opt2;
      if (M >= buyingPrice) {
        M -= buyingPrice;
        if (companyName in myStock) {
          myStock[companyName] += +opt2;
        } else {
          myStock[companyName] = +opt2;
        }
      }
      break;
    }
    case '2': {
      const stockPrice = companies.find((v) => v[1] === opt1)[2];
      if (myStock[opt1] >= +opt2) {
        M += stockPrice * opt2;
        myStock[opt1] -= opt2;
      } else {
        M += stockPrice * myStock[opt1] || 0;
        myStock[opt1] = 0;
      }
      break;
    }
    case '3': {
      companies.find((v) => v[1] === opt1)[2] += +opt2;
      break;
    }
    case '4': {
      for (const company of companies) {
        if (company[0] === +opt1) {
          company[2] += +opt2;
        }
      }
      break;
    }
    case '5': {
      for (const company of companies) {
        if (company[0] === +opt1) {
          company[2] += Math.floor((company[2] * opt2) / 1000) * 10;
        }
      }
      break;
    }
    case '6': {
      result.push(M);
      break;
    }
    case '7': {
      let cash = M;
      for (const company of companies) {
        const companyName = company[1];
        if (companyName in myStock) {
          cash += myStock[companyName] * company[2];
        }
      }
      result.push(cash);
      break;
    }
  }
});

console.log(result.join('\n'));
