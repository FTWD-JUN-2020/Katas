// https://www.codewars.com/kata/52efefcbcdf57161d4000091
function count(string) {
  let obj = {};
  string.split("").forEach((x) => {
    if (!obj.hasOwnProperty(x)) obj[x] = 1;
    else obj[x] += 1;
  });
  return obj;
}

// function count (string) {
//   let result={}
//   for(const char of string)
//     result.hasOwnProperty(char) ? result[char]+=1 : result[char]=1
//   return result
// }
