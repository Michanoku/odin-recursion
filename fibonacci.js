// The fibonacci function
function fibs(digits) {
  const fibArray = new Array();
  for (let i = 0; i < digits; i++) {
    if (i <= 1) {
      fibArray.push(i);
    } else {
      fibArray.push((fibArray[i-1] + fibArray[i-2]));
    }
  }
  return fibArray;
}

// The fibonacci function with recursion
function fibsRec(digits) {

}

console.log(fibs(8));