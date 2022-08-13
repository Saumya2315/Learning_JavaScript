// question 8

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

// var a= prompt('a')
// var b = prompt('b')
// a>b 
// ?console.log('a is greater than b')
// :console.log('a is smaller than b')


var  getDaysInMonth = function(year , month){
    return new Date(year , month ,0).getDate();
}
var year = prompt('enter a year')
if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
{
    console.log(` ${year} is a Leap year`)
    var month=prompt('enter month number from 1-12')
    console.log(getDaysInMonth(year , month));
}
else{
    console.log(`${year} is not a leap year`)
    var month=prompt('enter month number from 1-12')
    console.log(getDaysInMonth(year , month));
}

// question 3
var day=prompt('enter the week day')
if(day=='Monday'|| day=='Tuesday' || day=='Wednesday' || day=='Thrusday' || day=='Friday'){
    console.log(`${day} is a working day`)
}
else{
    console.log(`${day} is a weekend`)
}

// question level 3 - 1
var month = prompt('enter a month')
var mon = month.toLowerCase();
console.log(mon);
switch(mon)
{
    case mon=='january':
        console.log(`january has 31 days`);
        break;
    case mon=='february':
        console.log(`february has 28-29 days`);
        break;
    case mon=='march':
        console.log(`march has 30 days`);
        break;
    case mon=='apirl':
        console.log(`apirl has 31 days`);
        break;
    case mon=='may':
        console.log(`may has 30 days`);
        break;
    case mon=='june':
        console.log(`june has 31 days`);
        break;
    case mon=='july':
        console.log(`july has 30 days`);
        break;
    case mon=='august':
        console.log(`august has 31 days`);
        break;
    case mon=='septmeber':
        console.log(`september has 30 days`);
        break;
    case mon=='october':
        console.log(`october has 31 days`);
        break;
    case mon=='november':
        console.log(`november has 30 days`);
        break;
    case mon=='december':
        console.log(`december has 31 days`);
        break;
}