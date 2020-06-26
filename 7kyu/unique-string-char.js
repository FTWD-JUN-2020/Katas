// https://www.codewars.com/kata/5a262cfb8f27f217f700000b
function solve(a, b) {
  //..
  //   let result =''
  //  for (const char of a){
  //     if( ! b.includes(char))
  //       result +=char
  //    }
  //  for (const char of b){
  //     if(! a.includes(char))
  //       result +=char
  //    }
  //    return result
  return [...a, ...b]
    .filter((c) => a.indexOf(c) === -1 || b.indexOf(c) === -1)
    .join("");
}
