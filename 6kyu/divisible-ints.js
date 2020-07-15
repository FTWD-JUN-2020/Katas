//www.codewars.com/kata/566859a83557837d9700001a
https: function getCount(n) {
  let counter = 0;
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
    for (let j = i; j <= nStr.length; j++) {
      let substr = nStr.slice(i, j);
      if (substr === nStr) continue;
      if (n % substr === 0) counter++;
    }
  }
  return counter;
}
