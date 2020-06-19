// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three) {
  //Solution
  //   let split = one.split('');
  //   return split.map((letter, index) => {
  //     return letter+two[index]+three[index];
  //   }).join('');
  let string = "";
  for (let i = 0; i < one.length; i++) {
    string += one[i] + two[i] + three[i];
  }
  return string;
}
