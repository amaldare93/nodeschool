/*
  REST
  Exercise 6 of 9

  This exercise uses a slightly different format than usual. This time, your goal is to write a Node module whose default export is an average function. You don't need to print anything to the console. That is, your solution should look something like:

      module.exports = function average(/ what goes here /) {
          // what goes here?
      };

  We'll test your module by passing it a few different sets of arguments, e.g. average(1, 2, 3) and average(5, 10), and making sure that it works in all cases.
*/

module.exports = function average(...args){
  var size = args.length;
  var sum = args.reduce((prev, curr) => prev + curr);
  return sum / size;
};
