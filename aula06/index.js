let country = "Brazil"

console.log(country.length) // property
console.log(country.toUpperCase()) // method

let res = "abc" * 4 // example of NaN
console.log(res)

let tel = "123456789"
console.log(Number.parseInt(tel, 10))

function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}
