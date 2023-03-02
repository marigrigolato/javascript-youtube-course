// method map(callback) creates a new array with the results of calling a provided
// function on every element in the calling array.

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
