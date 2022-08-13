// Level 1

const arr = [];
const arr1 = [0 , 1 ,2,3,4,5];
console.log(arr1.length);
console.log(arr1[0] , arr1[arr1.length -1] , arr1[arr1.length/2])

const mixedDataTypes = [ 1, "saumya" , 'a' , [1 , 2, "sa"] , '%'];
const companies = ['Facebook', 'Google', 
'Microsoft', 'Apple', 'IBM', 'Oracle' ,'Amazon'];
console.log(companies);

for(var i=0 ; i<companies.length ; i++)
{
    console.log(companies[i]);
    console.log(companies[i].toUpperCase())
}

console.log(companies.toString())
console.log(companies.includes('Saumya'))
console.log(companies.includes('IBM'))
console.log(companies.sort())
console.log(companies.sort().reverse())
console.log(companies.slice(0,3))
console.log(companies.slice(companies.length - 3 , companies.length))
console.log(companies.slice(companies.length /2 ))
console.log(companies.shift())
console.log(companies.pop())
console.log(companies.splice())

// Level 2

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[.,]/g , '')
let arrayStore = text.split(" ")
console.log(arrayStore)
console.log(arrayStore.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
for(var s = 0 ; s<shoppingCart.length ; s++){
    if(shoppingCart[s]=='Tea'){
        shoppingCart[s]='Green Tea'
    }
}
shoppingCart.splice(shoppingCart.indexOf('Honey') , 1);
console.log(shoppingCart)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let index = countries.indexOf('Ethiopia')
console.log(countries[index].toUpperCase())

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
console.log(frontEnd.concat(backEnd))

// Level 3

const aage = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ];
console.log(aage.sort())
console.log(aage[0])
let len = aage.length
console.log(aage[len-1])
if(len%2==0){
    console.log(aage[len/2])
}
else{
    console.log((aage[(len+1)/2]))
}
console.log(aage[len-1]- aage[0])

// 
let arrayOfarray = []
for(var j=0 ; j<countries.length ; j++){
    arrayOfarray.push([countries[j].length , countries[j] , countries[j].slice(0,3)])
}
console.log(arrayOfarray)
