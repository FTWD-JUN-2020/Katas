// https://www.codewars.com/kata/5bab83fffe6c0c52b8000172

// function obtain(s, t) {
//   let count = 0;
//   s = s.split("");
//   //   if([...s].sort().join('') !== [...t].sort().join('')) return -1
//   for (let i = 0; i < s.length; i++) {
//     while (s[i] !== t[i]) {
//       const index = s.indexOf(t[i], i);
//       if (index === -1) return -1;
//       let temp = s[index];
//       s[index] = s[index - 1];
//       s[index - 1] = temp;
//       //       [s[index-1], s[index]] = [s[index], s[index-1]]
//       count++;
//     }
//   }
//   return count;
// }

function obtain(s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let index = t.indexOf(s[i]);
    if (index === -1) return -1;
    t = t.slice(0, index) + t.slice(index + 1);
    count += index;
  }
  return count;
}
