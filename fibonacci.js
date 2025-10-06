// The fibonacci function
function fibs(digits) {
  const fibArray = new Array();
  let current = 0;
  let next = 1;
  for (let i = 0; i < digits; i++) {
    fibArray.push(current);
    const temp = current;
    current = next;
    next+= temp;
  }
  return fibArray;
}

// The fibonacci function with recursion
function fibsRec() {
  // TODO
}

console.log(fibs(8));