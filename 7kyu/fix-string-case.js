// https://www.codewars.com/kata/5b180e9fedaa564a7000009a
// function solve(s) {
//     var numUpper = (s.match(/[A-Z]/g) || []).length;
//     var numLower = (s.match(/[a-z]/g) || []).length;
//     return numUpper > numLower ? s.toUpperCase() : s.toLowerCase()
// }

// function solve(s){
//   let s1 = [...s].filter(x => x === x.toLowerCase());
//   return (s.length - s1.length <= (s.length / 2)) ? s.toLowerCase() : s.toUpperCase()
// }

function solve(s) {
  let uC = 0;
  let lC = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 97) uC++;
    else lC++;
  }
  if (uC > lC) return s.toUpperCase();
  return s.toLowerCase();
}
