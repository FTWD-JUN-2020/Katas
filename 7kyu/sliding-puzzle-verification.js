// https://www.codewars.com/kata/5e28b3ff0acfbb001f348ccc
function isSolved(board) {
  let filtered = flat(board).filter((e, i) => e === i);
  return filtered.length === flat(board).length;
}

function flat(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? ((acc = [...acc, ...val]), acc)
        : (acc.push(val), acc),
    []
  );
}
