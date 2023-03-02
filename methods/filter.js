// method filter(callback) creates a new array with all elements
// that pass the test implemented by the provided function.

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
  return number > 10;
});

// filter() ALWAYS returns an array (even if it's empty)
console.log(numbersAboveTen); // [14, 11]
