// https://www.codewars.com/kata/5a092d9e46d843b9db000064
// function solve(arr){
//   return  [...new Set(arr)].reduce((a, c) => a + c);
// };
function solve(arr) {
  let res = 0;
  arr.forEach((elem) => {
    if (!arr.includes(-elem)) {
      res = elem;
    }
  });
  return res;
}
