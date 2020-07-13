// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1
function waveSort(arr) {
  arr.sort((a, b) => a - b);
  let x = 0;
  for (i = 0; i < arr.length - 1; i += 2) {
    x = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = x;
  }
  return arr;
}
