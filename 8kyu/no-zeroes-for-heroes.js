// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
  // your code
  /*   return Number(n.toString().replace(/0+$/, '')); */

  //   let arr = n.toString().split('');
  //   for(let i = arr.length-1; i >= 0; i--) {
  //     if(arr[i] === "0") {
  //       arr.pop();
  //     } else {
  //       break;
  //     }
  //   }
  //   return Number(arr.join(''));

  // 156 0

  let num = n.toString();

  while (num.endsWith("0")) {
    num = num.slice(0, -1);
  }
  return Number(num);
}
