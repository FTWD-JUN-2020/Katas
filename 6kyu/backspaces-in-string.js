// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
// solution 1
function cleanString(s) {
  while (s.includes("#")) {
    ind = s.indexOf("#");
    s.replace(s[ind], "");
    s = s.substring(0, ind - 1) + s.substring(ind + 1);
  }
  return s;
}
// solution 2
function cleanString(s) {
  let arr = [];
  [...s].map((x) => {
    if (x === "#") return arr.pop();
    else return arr.push(x);
  });
  return arr.join("");
}
// solution 3
function cleanString(s) {
  let res = [];
  s.split("").forEach((element) => {
    element != "#" ? res.push(element) : res.pop();
  });
  return res.join("");
}
// solution 4
function cleanString(s) {
  return [...s]
    .reduce((a, v) => {
      v === "#" ? a.pop() : a.push(v);
      return a;
    }, [])
    .join("");
}
