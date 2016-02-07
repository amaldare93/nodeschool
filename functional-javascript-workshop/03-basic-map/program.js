/*
  Basic: Map
  Exercise 3 of 18

  Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll

*/

function doubleAll(numbers) {
  return numbers.map(num => num * 2);
}

module.exports = doubleAll
