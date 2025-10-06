// Merge sort function with recursion
function mergeSort(array) {
  // If the array is length 1, just return it as is
  if (array.length <= 1) {
    return array;
  } 
  // Calculate half size and split the arrays and call merge sort
  const half = Math.ceil(array.length / 2);
  const left = mergeSort(array.slice(0, half));
  const right = mergeSort(array.slice(half));
  
  // Make a new array and sort the merge sorted arrays into the new array
  const newArray = new Array();
  while (left.length || right.length) {
    if (!right.length || (left.length && left[0] <= right[0])) {
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }
  return newArray;
}

// Tests
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
