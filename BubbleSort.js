//simple swap function that swaps the values at 2 indices in an array.
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

//Best case is that the nodes are already in order, so it simple needs to check each pair 1 time; an O(n) operation.
//Worst case, each value needs swapping with each other value, O(n^2)
//Average case O(n^2)
//looks through adjacent pairs of values in the array.
function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    //if the values are in the wrong order then it swaps them around and increase the swap counter
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  //if the swaps counter is greater than 0,
  //it means a swap was done meaning it still not in right order so recursively call bubblesort.
  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

module.exports = bubbleSort;
