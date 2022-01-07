// Implement insertionSort . Given an array, both algorithms will sort the values in the array.
// The functions take 2 parameters: an array and an optional comparator function. The
// comparator function is a callback that will take two values from the array to be compared.
// The function returns a negative value if the first value is less than the second, a positive
// value if the first value is greater than the second, and O if both values are equal. The default
// comparator you provide should assume that the two parameters are numbers and that we
// are sorting the values from smallest to largest.
// Insertion Sort
// Here's some guidance for how insertion sort should work:
// Start by picking the second element in the array (we will assume the first element is
// the start of the "sorted" portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the
// sorted portion to place the element in the correct place.
// Repeat until the array is sorted.Implement insertion sort. Your function should accept
// an array and return an array of sorted values.
// Examples

//The insertion sort example shown in the video works, but there's a small problem with variable scoping for j. j is declared as a var in the for loop and thus it is accessible outside of the loop and thus arr[j+1] = currentVal kind of works, but isn't this ideally a bad practice and adds to confusion? if I change the var to a let this algorithm wouldn't necessarily work since then j would be scoped to the 2nd for loop block. (My assumption here is if I am answering algorithm in javascript then the job role is javascript related and this could become a flag to the interviewer if they pay attention and can quickly turn into a snowball). A better solution, imo, is as below-

 const insertionSort = (arr) => {
  for (let i = 1; i< arr.length; i++){
    let current = arr[i];
    for(let j = i-1; j >=0 && arr[j] > current; j--){
      arr[j+1] = arr[j];      
      arr[j] = current;
    }
  }
  return arr;
}
console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4,
console.log(insertionSort([1, 2,3])) 