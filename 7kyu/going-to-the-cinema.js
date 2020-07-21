// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
function movie(card, ticket, perc) {
  let n = 0;
  let sum1 = 0;
  let sum2 = card;
  while (sum1 <= Math.ceil(sum2)) {
    n++;
    sum1 = n * ticket;
    sum2 += ticket * perc ** n;
  }
  return n;
}
