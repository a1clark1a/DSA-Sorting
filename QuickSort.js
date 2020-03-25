
function quickSort(array, start = 0, end = array.length){
    if(start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

/* Quicksort uses a divide and conquer approach. 
You partition the array into halves around a pivot value. 
All of the values which are less than the pivot value go  to 1 half of the array,
and all of the values which are greater than the pivot go to the other half of the array.
 You then recursively sort the 2 halves of the array until the halves are of length 0 or 1*/
 
 //Lomuto's Algorithm
 
 function partition(array, start, end){
     const pivot = array[end -1];
     let j = start;
     for(let i = start; i < end - 1; i++){
         if(array[i] <= pivot){
             swap(array, i, j);
             j++;
         }
     }
     swap(array, end-1, j);
     return j;
 }
 
 //simple swap function that swaps the values at 2 indices in an array.
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
 
  
  module.exports = quickSort;