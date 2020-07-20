// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
function maxDiff(list) {
  //   return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
  if (list.length <= 1) return 0;
  let arr = list.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}
