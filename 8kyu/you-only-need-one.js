// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

function check(a, x) {
  // your code here
  //   return a.includes(x)
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}
