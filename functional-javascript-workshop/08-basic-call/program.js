/*
  Basic: Call
  Exercise 8 of 18

  Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.
*/
module.exports = function duckCount(){
  return Array.prototype.filter.call(arguments, function(item){
    return Object.prototype.hasOwnProperty.call(item, 'quack');
  }).length;
};
