console.log("30 days tasks")
//checking datatypes
console.log(typeof 'saumya')
console.log(typeof 5)
console.log(typeof null)
console.log(typeof true)
console.log(typeof undefined)

//created a variable not initialized any value
let firstname
console.log("a variable not initialized any value" , firstname)

/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/

/*variable
let used where value can be changed
const used where value is always fixed. universal truth*/

/*points kept in mind while creating variable
A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.
*/

let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true
console.log(firstName , lastName , country , city , age , isMarried)

const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log("universal truth" , gravity, boilingPoint, PI)

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)

