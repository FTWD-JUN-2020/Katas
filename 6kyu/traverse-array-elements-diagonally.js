// https://www.codewars.com/kata/5968fb556875980bd900000f
function diagonal(arr) {
  // your code here
  let res = [];
  for (let i = 2 * (arr.length - 1); i >= 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      let x = i - j;
      if (arr[x]) res.push(arr[x][j]);
    }
  }
  return res;
}
