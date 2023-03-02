// method find(callback) returns the value of the first element in the provided array
// that satisfies the provided testing function. If no values satisfies the testing function,
// undefined is returned.

let names = ["Sam", "Alex", "Charlie"];

let result = names.find(function(name) {
  return name === "Alex";
});

console.log(result); // "Alex"

// .FILTER() VS .FIND()
// 1.The .filter() method always returns an array.
// 2.The .find() method returns the first array item that matches the callback function or undefined.
