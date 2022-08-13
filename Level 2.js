let word = 'Javascript'
word[0]='Y'
console.log(word)//strings are immutable so changes will be done


//primitive datatypes , these are comparable , will give true or false value
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

//non-primitive data types
let num =[1,2,3]
num[0]=10
console.log(num)

// we do not compare non primitive data types 
/*a non-primitive data type is mutable. Non-primitive data types cannot be compared by value. 
Even if two non-primitive data types have the same properties and values, they are not strictly equal.*/


let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',role:'teaching',country:'Finland'}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

/*we do not compare non-primitive data types. 
Do not compare arrays, functions, or objects.
 Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. 
Two objects are only strictly equal if they refer to the same underlying object. */

let num1 = [1, 2, 3]
let number1 = num1

console.log(num1 == number1)  // true

let user1 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let user2 = user1

console.log(user1 == user2)  // true

//NUMBERS
const pi = Math.PI
console.log("pi value" , pi)
console.log(Math.round(pi))
console.log(Math.round(9.81))
console.log(Math.floor(pi))
console.log(Math.ceil(pi))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))
const randNum = Math.random() 
console.log(randNum)
console.log(Math.random())
console.log(Math.random()*10)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

//string concatenation
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

//string concatenation using different operator
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
console.log(personInfoOne)

//the backslash character (\) at the end of each line to indicate that the string will continue on the next line.
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//template literals
console.log(`the sum of 2 and 3 is 5`)
let a=2
let b=3
console.log(`the sum of ${a} and ${b} is ${a-b}`)
console.log(`${a} is greater than ${b} : ${a>b}`)

//String Methods
//1) length
let jack = 'Javascript'
console.log(jack.length)

//2)Accessing characters in a string
let string = 'Javascript'
let letter1 = string[0]
console.log(letter1)

//3)toUpperCase()
console.log(string[1].toUpperCase())
console.log(string.toUpperCase())

//4)toLowerCase()
console.log(string[0].toLowerCase())
console.log(string.toLowerCase())

//5)substr()-It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4,6))

//6)It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(4,6))

//7)split()- The split method splits a string at a specified place.
let stringsplit = 'as sa aa a'
console.log(stringsplit.split()) //changes to array
console.log(stringsplit.split('a'))

//8)trim(): Removes trailing space in the beginning or the end of a string.
let stringtrim = '   30 Days Of JavaScript   '
console.log(stringtrim)
console.log(stringtrim.trim(' '))

/*9)includes() : It takes a substring argument and it checks if substring argument exists in the string.
 includes() returns a boolean. 
If a substring exist in a string, it returns true, otherwise it returns false.*/
let string1 = '30 Days Of JavaScript'

console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true

//10)replace(): takes as a parameter the old substring and a new substring.
// string.replace(oldsubstring , newsubstring)
let str = '30 Days Of JavaScript'
console.log(str.replace('JavaScript', 'Python')) // 30 Days Of Python
let count = 'Finland'
console.log(count.replace('Fin', 'Noman'))       // Nomanland

//11)charAt() - takes index and returnthe value at that index
//string.charAt(index)
console.log(string1.charAt(3))

/*12)charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
string.charCodeAt(index) */
console.log(string1.charCodeAt(3))        // D ASCII number is 68

/*13)indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
string.indexOf(substring) */
console.log(string1.indexOf('D'))          // 3
console.log(string1.indexOf('Days'))       // 3

/*14))lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
string.lastIndexOf(substring)*/
let string2 = 'love I love JavaScript. If you do not Love JavaScript what else can you love.'
console.log(string2.lastIndexOf('love'))

/*15)concat(): it takes many substrings and joins them.
string.concat(substring, substring, substring)*/
let string4 = '30'
console.log(string4.concat("Days", "Of", "JavaScript"))

/*16)startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//syntax
string.startsWith(substring)*/
console.log(string2.startsWith('Love'))   // true
console.log(string2.startsWith('love'))   // false
console.log(string2.startsWith('world'))  // false

/*17)endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
string.endsWith(substring)*/
let string5 = 'Love is the most powerful feeling in the world'

console.log(string5.endsWith('world'))         // true
console.log(string5.endsWith('love'))          // false
console.log(string5.endsWith('in the world')) // true

/*18)search()- it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
string.search(substring)*/
let string6 = 'I love JavaScript. If you do not love javaScript what else can you love.'
console.log(string6.search('love')) //2
console.log(string6.search('javascript'))  // -1
console.log(string6.search(/javascript/gi))  // 7  g-means to search in the whole text, i - case insensitive

/*19)match() - it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign. */
let string7 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let stri = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
console.log(string7.match('love'))
console.log(string7.match(patternTwo))

/*exercise-
Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.
*/
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

/*20)repeat(): it takes a number as argument and it returns the repeated version of the string.
string.repeat(n)*/
let strig = 'love'
console.log(strig.repeat(10)) // lovelovelovelovelovelovelovelovelovelove 

//CHECKING DATATYPES AND CASTING
console.log(typeof NaN)         // number

/*String to Int
parseInt()
Number()
Plus sign(+)*/

let nu = '10'
let numInt = parseInt(nu)
console.log(numInt) // 10

let numInt1 = Number(nu)
console.log(numInt1) // 10

let numInt2 = +nu
console.log(numInt2) // 10

/*String to Float
We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

parseFloat()
Number()
Plus sign(+)*/
let n = '9.81'
let numFloat = parseFloat(n)
console.log(numFloat) // 9.81

let numFloat1 = Number(n)
console.log(numFloat1) // 9.81

let numFloat2 = +n
console.log(numFloat2) // 9.81

/*Float to Int
We can convert float numbers to integers. We use the following method to convert float to int:

parseInt()*/
let num9 = 9.81
let numInt4 = parseInt(num9)
console.log(numInt4) // 9 
