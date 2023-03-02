//You could either define a function and give it a name,
// or you could define a variable and assign it to an anonymous function.

// This is a function declaration:
function sum(a, b) {
  return a + b;
}

// Can be written as:
const sum = (a, b) => {
  return a + b;
}

// this works 👍 (implicit return)
const sum = (a, b) => a + b; // sum is a function that takes two parameters and returns the result them

console.log(sum(2, 2)) // 4
console.log(sum(2, 3)) // 5
