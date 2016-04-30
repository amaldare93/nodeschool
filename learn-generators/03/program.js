/*
  DELEGATING GENERATORS
  Exercise 3 of 6

  Write generator-function flat that takes nested array inside and flattens it.
 */
'use strict'

function* flat (arr) {
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      yield* flat(arr[i])
    } else {
      yield arr[i]
    }
  }
}

var A = [1, [2, [3, 4], 5], 6]
for (var f of flat(A)) {
  console.log(f)
}
