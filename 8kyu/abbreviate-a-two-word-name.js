// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  // code away
  //     name = name.split(' ');
  //     let nameInitial = name[0][0].toUpperCase();
  //     let lastnameInitial = name[1][0].toUpperCase();
  //     return `${nameInitial}.${lastnameInitial}`

  let nam = name.split(" ");
  return (nam[0][0] + "." + nam[1][0]).toUpperCase();
}

// return name.split(' ').map(x => x[0].toUpperCase()).join('').replace(/^.(?!$)/g, x=>x+".");
