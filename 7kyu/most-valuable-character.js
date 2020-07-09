// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/train/javascript
function solve(st) {
  return [...new Set(st)].reduce((a, v) => {
    if (st.lastIndexOf(v) - st.indexOf(v) > st.lastIndexOf(a) - st.indexOf(a)) {
      a = v;
    } else if (
      st.lastIndexOf(v) - st.indexOf(v) ===
      st.lastIndexOf(a) - st.indexOf(a)
    ) {
      a = a < v ? a : v;
    }
    return a;
  }, st[0]);
}
// all the unique characters
// iterate over them, lastindex - firstindex
// value from above > solution, solution replace
// value from above === solution, lexicogra > solution

// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'
