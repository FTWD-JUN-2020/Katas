// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
function solve(s) {
  let uc = 0;
  let lc = 0;
  let n = 0;
  let sc = 0;
  [...s].forEach((x) => {
    if (x.match(/[A-Z]/)) uc++;
    if (x.match(/[a-z]/)) lc++;
    if (x.match(/[0-9]/)) n++;
    if (x.match(/[^A-Za-z0-9]/)) sc++;
  });
  return [uc, lc, n, sc];
}
