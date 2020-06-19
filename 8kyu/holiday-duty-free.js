// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
function dutyFree(normPrice, discount, hol) {
  let discountP = discount / 100;
  let price = normPrice * discountP;
  let final = hol / price;
  return Math.floor(final);
}
