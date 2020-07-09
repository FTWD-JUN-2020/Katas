// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// function accum(s) {
//  return   [...s].map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-')
// }

function accum(s) {
  let split = s.split("");
  return split.reduce((acc, val, ind) => {
    let str = "";
    for (let i = 0; i < ind; i++) {
      str += s[ind];
    }
    if (ind === s.length - 1) {
      return acc + s[ind].toUpperCase() + str.toLowerCase();
    }
    return acc + s[ind].toUpperCase() + str.toLowerCase() + "-";
  }, "");
}
