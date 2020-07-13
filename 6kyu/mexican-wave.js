// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// function wave(str){
//   return [...Array(str.length).keys()].map(x =>{
//  return str.slice(0, x) + str.slice(x, x + 1).toUpperCase() + str.slice(x + 1);
// }).filter(el => el !== str);
// }

function wave(str) {
  let result = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    let start = str.substring(0, i);
    result = start + str[i].toUpperCase() + str.substring(i + 1, str.length);
    arr.push(result);
  }
  return arr;
}
