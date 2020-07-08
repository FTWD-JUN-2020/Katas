// https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f/javascript
function consecutiveDucks(num, i = 8) {
  if (num < 2) return false;
  if (num % 2 == 1) return true;
  else {
    return consecutiveDucks(num / 2);
  }
  //   return num / i > 1 ? consecutiveDucks(num, i * 2) : num / i !== 1;
}
