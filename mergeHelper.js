// Given two sorted arrays, write a function called merge which accepts two SORTED arrays
// and returns a new array with both of the values from each array sorted.
// This function should run in O(n + m) time and O(n + m) space and should not modify the
// parameters passed to it.
// As before, the function should default to sorting numbers in ascending order. If you pass in a
// comparator function as a third argument, this comparator is what will be used. (Note that the
// input arrays will always be sorted according to the comparator!)
// Also, do not use the built in .sort method! We're going to use this helper to implement a
// sort, so the helper itself shouldn't depend on a sort.

function merge(arr1, arr2, comparator) {
  let i = 0;

  let j = 0;

  let sortedArr = [];

  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
      sortedArr.push(arr1[i]);

      i++;
    } else {
      sortedArr.push(arr2[j]);

      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);

    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);

    j++;
  }

  return sortedArr;
}
var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2));
