/*
  Basic: Recursion
  Exercise 7 of 18

  Implement Array#reduce using recursion.

  To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

  For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.
*/

/*
  array    arr: array to perform tasks on
  function fn(previous, current, index) : function to call on each element of array
  initial     : initial value of item to be passed
*/


module.exports = function reduce(arr, fn, initial){

  if(!arr.length) return initial;
  var head = arr[0];
  var tail = arr.slice(1);
  return reduce(tail, fn, fn(initial, head));

};

/* //OFFICIAL SOLUTION
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
*/
