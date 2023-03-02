function incrementAge(person) {
  person.age = person.age + 1;
  return person
}

const person = {
  firstName: "Jennifer",
  lastName: "Doe",
  age: 18
}
console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}
