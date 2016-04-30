/*
  GENERATOR ITERATOR
  Exercise 2 of 6

  Write a generator function factorial that, given an input number, starts at 1 and goes
  up to the number, yielding the factorial of each number along the way.
 */

function *factorial (n) {
  var prevFactorial = 1;
  for (var i = 1; i <= n; i++) {
    yield prevFactorial *= i;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}
