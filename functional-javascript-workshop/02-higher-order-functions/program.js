/*
  Higher Order Functions
  Exercise 2 of 18

  Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
*/

function repeat(operation, num) {
  if(num > 0) {
    operation();
    return repeat(operation, num - 1);
  }
}

module.exports = repeat;
