function roundToNext5(n) {
  // ...
  // ternary notation
  //   return n % 5 === 0 ? n : roundToNext5(++n);
  function roundToNext5(n) {
    if (n % 5 == 0) {
      return n;
    }
    while (n % 5 != 0) {
      n++;
    }
    return n;
  }
}
