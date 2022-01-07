// ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an
// array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array
// and an optional comparator function.
// function bubbleSort(arr, comparator) {
// if (typeof comparator !==
// "function') {
// // provide a default
// The comparator function is a callback that will take two values from the array to be
// compared. The function returns a negative value if the first value is less than the second, a
// positive value if the first value is greater than the second, and O if both values are equal
// The default comparator you provide should assume that the two parameters are numbers
// and that we are sorting the values from smallest to largest
// Bubble sort is an O(n^2) algorithm. You can read more about it here:
// https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-
// sorting-algorithms
function bubbleSort(arr, comparator){
    if(typeof comparator !== 'function'){
        comparator = (v1, v2) =>{
            return v1-v2;
        }
    }
    let end = arr.length;
    let swap = true;
    while(end > 0 && swap){
        swap = false;
        for(let i = 0; i<end - 1; i++){
          if(comparator(arr[i],arr[i+1])>0){
              let tmp = arr[i+1];
              arr[i+1] = arr[i];
              arr[i] = tmp;
              swap = true;
          }
        }
      end --;
    }
    return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7,9]))
console.log(bubbleSort([-10,0,-20,4,1]))
