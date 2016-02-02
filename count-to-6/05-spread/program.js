/*
  SPREAD
  Exercise 5 of 9

  You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.

  And let's log the list of numbers themselves, to make it clearer. So the output should be, for example:

    The minimum of [18,5,7,24] is 5
*/

var args = process.argv.slice(2);
var min = Math.min(...args);

console.log(`The minimum of [${args}] is ${min}`);
