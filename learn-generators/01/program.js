/*
  RUN STOP RUN
  Exercise 1 of 6

  Write a range generator-function that takes from and to arguments.
  Print the numbers as strings within the specified range, one per line.
 */

function *range (from, todo) {
  var cur = from
  while (cur <= todo) {
    yield cur
    cur += 1
  }
}

for (var r of range(5, 10)) {
  console.log(r);
}
