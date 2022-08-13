// Booleans
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Truthy values
// False Values

// undefined
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

// null
let empty = null
console.log(empty) // -> null , means no value

// Operators
// Assignment operator - "=" 
let country = 'Finland'

// Arithmetic operator - += , -= , *= , /= , %= ,**=
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter
//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram
// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)


const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */

//  Comparison Operators - == , === , != , > , <, >= , <=
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical OPerator
// symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation).
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const checkk = 4 > 3 && 10 < 5         // true && false -> false
const checkkk = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check1 = 4 > 3 || 10 > 5         // true  || true -> true
const check2 = 4 > 3 || 10 < 5         // true  || false -> true
const check3 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check4 = 4 > 3                     // true
let check5 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff1 = !isLightOn           // false
let isMarried1 = !false                // true


// Increament OPerator
// pre increament
let count = 0
console.log(++count)        // 1
console.log(count)  

// post increament
let count1 = 0
console.log(count1++)        // 0
console.log(count1)  

// decreament operator
// pre decreament
let coun = 0
console.log(--coun) // -1
console.log(coun)  // -1

// post decreament
let cou = 0
console.log(cou--) // 0
console.log(cou)   // -1

// Ternary OPerator
let number = 5
number > 0
  ? console.log(`${number} is a positive number`) //if condition will be true
  : console.log(`${number} is a negative number`) //when condition will be false
number = -5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


// // alert()
// alert("felling sleepy")

// //prompt()
// // prompt('required text', 'optional text')
// let numb = prompt('Enter number' , 'number goes here')
// console.log(numb)

// // confirm()
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// Data Object
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())
console.log(now.getTime())

// To get the tikme in milliseconds
console.log(now.getTime())

console.log(Date.now()+100) //can also increase the time by our own choice
console.log(new Date().getTime())


