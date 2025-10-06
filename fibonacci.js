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
    if (digits === 1) {
      return [0];
    } 
    if (digits === 2) {
      return [0, 1];
    } 
    return [
      ...fibsRec(digits - 1), 
            fibsRec(digits - 1)[digits - 2] + fibsRec(digits - 1)[digits - 3]
      ];
    
}

console.log(fibs(8));
console.log(fibsRec(8));