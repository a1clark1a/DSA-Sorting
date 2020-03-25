

//Best, average, and worst case performance of O(nlog(n))
function mergeSort(array){
    //if the array has 1 or 0 elements, then it is by definition sorted, so you can return the array itself.
    if(array.length <= 1){
        return array;
    }
    
    //otherwise, slice the array into 2 halves 
    const middle = Math.floor(array.length /2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    
    //and sort each half by recursively calling mergeSort
    left = mergeSort(left);
    right - mergeSort(right);
    //the 2 sorted halves are then merged together in the correct order using the merge function
    return merge(left,right, array);
}


/* To merge the 2 lists you just keep choosing the lowest value
 from the left or right arrays that hasnt already been added to the output array.
  When 1 of the arrays is empty, you add all of the remaining values from the other array to it.*/
  
function merge(left, right, array){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    
    for(let i = leftIndex; i < left.length; i++){
        array[outputIndex++] = left[i];
    }
    
    for(let i = rightIndex; i < right.length; i++){
        array[outputIndex++] = right[i]
    }
    return array;
}

module.exports = mergeSort;