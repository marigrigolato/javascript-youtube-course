// default function parameters  allow named parameters to be initialized with default values
// if no value or undefined is passed.

function welcomeUser(name = "user") {
  return `Hello ${name}`;
}

welcomeUser("Sam"); // "Hello Sam"
welcomeUser(); // "Hello user"
