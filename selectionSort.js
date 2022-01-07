// Selection Sort
// Here's some guidance for how selection sort should work:
// Assign the first element to be the smallest value (this is called the minimum). It does
// not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum"
// and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// You will now see that the beginning of the array is in the correct order (similar to how
// after the first iteration of bubble sort, we know the rightmost element is in its correct
// place).
// Repeat this with the next element until the array is sorted.
// This algorithm has a O(n^2) time complexity. You can read more about them here:
// https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-
// sorting-algorithms
function selectionSort(arr,comparator){
    let minIdx;
    if(typeof comparator !== 'function'){
        comparator = (a, b) => a - b;
    }
    for(let i = 0; i < arr.length - 1; i++){
        minIdx = i;
        for(let j = i + 1; j < arr.length; j++){
            if(comparator(arr[j],arr[minIdx]) < 0) minIdx = j;
        }
        if(minIdx !== i) [arr[i],arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
console.log(selectionSort([4,20,12,10,8,5]))
console.log(selectionSort([0,-10,5,2]))
console.log(selectionSort([1,2,3]))
console.log(selectionSort([]))


