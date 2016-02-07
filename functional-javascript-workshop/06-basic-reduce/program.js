/*
  Basic: Reduce
  Exercise 6 of 18

  Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
*/

module.exports = function countWords(inputWords){
  return inputWords.reduce(function(obj, word){
    obj[word] = obj[word] + 1 || 1;
    return obj;
  }, {});
};
