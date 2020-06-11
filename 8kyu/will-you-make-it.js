// https://www.codewars.com/kata/5861d28f124b35723e00005e
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  // TODO
  //   let ourFuel= fuelLeft* mpg
  //    if(ourFuel>= distanceToPump){
  //    return true;
  //    } else{
  //    return false;
  //    }
  return distanceToPump <= fuelLeft * mpg;
}
