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
    console.log("This was printed recursively");
    // Base cases
    if (digits === 1) {
      return [0];
    } 
    if (digits === 2) {
      return [0, 1];
    } 
    const fibArray = fibsRec(digits - 1);

    const next = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(next);
    
    return fibArray;
    
}
console.log(fibs(8));
console.log(fibsRec(8));