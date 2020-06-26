// https://www.codewars.com/kata/57ebdf944cde58f973000405/solutions/javascript
function reverser(sentence) {
  //   let newSent = []
  //   let arr = sentence.split(" ")
  //   if (sentence.length === 1)
  //     return sentence
  //   for (word of arr) {
  //     let reverse = ""
  //     for (let i = word.length - 1; i >= 0; i--) {
  //       reverse += word[i]
  //       if (i === 0)
  //         newSent.push(reverse)
  //     }
  //   }
  //   if(sentence[0] === " " && sentence[sentence.length - 1] === " ")
  //     return " " + newSent.join(" ") + " "
  //   else if(sentence[sentence.length - 1] === " ")
  //     return newSent.join(" ") + " "
  //   else if(sentence[0] === " ")
  //     return " " +newSent.join(" ")
  //   return newSent.join(" ")
  return sentence
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}
