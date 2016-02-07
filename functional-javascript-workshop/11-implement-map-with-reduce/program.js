/*
  Implement Map with Reduce
  Exercise 11 of 18

  Use Array#reduce to implement a simple version of Array#map.
*/

module.exports = function map(arr, fn){
  return arr.reduce(function(prev, curr){
    prev[prev.length] = fn(curr);
    return prev;
  },[]);
};
