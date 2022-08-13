var s= 10
console.log(typeof s)

console.log('number'==typeof(s))
console.log('python'.length)
console.log('python' == 'jargon')
console.log('dragon'.includes('on')=='python'.includes('on'))
var now = new Date()
console.log(now.getDate())
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

var sec = Date.now()
console.log(sec)
console.log(now.getTime())

console.log(0.5*10*20)
console.log(5+4+3)
console.log(3.14*(2**2))
console.log(2*2-2)
console.log((6-2)/(10-2))


// question 8 program to solve quadratic equation
// let root1 , root2;
// let a = prompt("enter the first number");
// let b = prompt("enter the second number");
// let c = prompt("enter the third number");
// var discriminant = b**2 + 4*a*c
// if (discriminant>0){
//     root1=((-b + Math.sqrt(b*b - 4*a*c))/2*a);
//     root2=((-b - Math.sqrt(b*b - 4*a*c))/2*a);
// }
// else if (discriminant==0)
// {
//     root2=root1=(-b/2*a)
// }
// else
// {
//     root1=((-b + i*Math.sqrt(discriminant))/2*a);
//     root2=((-b - i*Math.sqrt(discriminant))/2*a);
// }
// console.log("root1" + root1);
// console.log("root2" + root2);

// question 9
// var hours=prompt('enter hours');
// var rate=prompt('enter rate');
// console.log(hours*rate)

let firstName= 'saumya'
let lastName= 'agarawal'
console.log(`your first name , ${firstName} is longer than your family name , ${lastName}`)

// question 13
// let years = now.getFullYear()
// console.log(years)
// var birthYear=prompt("enter your birth year");
// let age = years-birthYear
// if((age)>18){
//     console.log(`you are ${birthYear} . You are old enought to drive`);
// }
// else{
//     console.log(`You are ${birthYear} . You willbe allowed to drive after ${18-age} years`)
// }

//question 11 
var a = 'saumya'
var b = ' agarwal'
console.log(a.length == b.length);
console.log(`whether my firstname ,${a} is greater , equal or smaler than ${b}`)

// question 14
var age = prompt('enter your age')
console.log(`number of years a person can live is  ${age*60*60*24*365}`)

// question 15
var today = new Date();
console.log(today.getFullYear() + "-" + (parseInt(today.getMonth())+1) + "-" + today.getDate() + " " +today.getHours()+ ":" +today.getMinutes())
