/*
  Function Spies
  Exercise 12 of 18

  Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

  Create a spy that keeps track of how many times a function is called.

 */

module.exports = function Spy(target, method){
  var spy = {count: 0};
  var targetMethod = target[method];

  spy.count = 0;

  target[method] = function(){
    spy.count += 1;
    return targetMethod.apply(target, arguments);
  }

  return spy;
};
