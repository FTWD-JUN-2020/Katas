// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

var greet = function (name) {
  let firstLetter = name[0].toUpperCase();
  let restOfName = name.substring(1).toLowerCase();
  //   return 'Hello ' + firstLetter + restOfName + '!';
  return `Hello ${firstLetter + restOfName}!`;
};

// var greet = function(name) {
//     return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
// };

// var greet = function(name) {
// return name.replace(/./g, x=>x.toLowerCase()).replace(/^(\w)/, x=>x[0].toUpperCase()).replace(/^(\b)/, 'Hello ').replace(/(\b)$/, '!')
// };
