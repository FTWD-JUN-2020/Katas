// https://www.codewars.com/kata/5ce6728c939bf80029988b57
function solve(s) {
  /*   let arr = s.split("");
      let res = arr
        .sort()
        .join("");
      let sum = 0;
      for (let i = 0; i < res.length - 1; i++) {
        if (res.charCodeAt(i) - res.charCodeAt(i + 1) !== -1) sum += 1;
      }
      if (sum > 0) return false;
      else return true; */
  // abd 96 97 99 - 96
  return (
    [...s].sort().join("") === [...new Set([...s])].sort().join("") &&
    [...new Set([...s])]
      .sort()
      .reduce(
        (a, v, i, arr) => (a += v.charCodeAt() - arr[0].charCodeAt() - i),
        0
      ) === 0
  );
}
