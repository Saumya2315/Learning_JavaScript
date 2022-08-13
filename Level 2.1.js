// Level 1

let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log("length of the string" , challenge.length)
console.log("upper case" , challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,4))
console.log(challenge.substring(0,2))
console.log(challenge.substr(3,challenge.length))
console.log(challenge.includes("contains ? " ,'Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let company ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(","))
console.log(challenge.replace('JavaScript' , 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let find = 'You cannot end a sentence with because because because is a conjunction'
console.log(find.indexOf('because'))
console.log(find.lastIndexOf('because'))
console.log(find.search('because'))
console.log(challenge.match('[a]'))
let add = ' Hello'
console.log(challenge.concat(add))
console.log(challenge.repeat(2))

// Level 2
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another. ")
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// question 3 -
let comp = '10'
console.log((typeof(comp)==typeof(10)))
console.log(typeof(parseInt(comp))==typeof(10))

// question 4
let compa= '9.8'
console.log((typeof(compa)==typeof(10)))
console.log(typeof(Math.round(compa))==typeof(10))

//question 5
let str1='python'
let str2 = 'jargon'
console.log((str1.includes('on'))&&(str2.includes('on')))

console.log((Math.random())*101)
console.log((Math.random())*256)

//formula to get random value btw 50-100 is
//(Math.random()*(max-min)+1+min)
console.log((Math.ceil(Math.random()*51+50)))

let acc = 'JavaScript'
console.log(acc.charAt(Math.round(Math.random()*acc.length)))

console.log('1 \t1 \t1 \t1 \t1')
console.log('2 \t1 \t2 \t4 \t8')
console.log('3 \t1 \t3 \t9 \t27')
console.log('4 \t1 \t4 \t16 \t64')
console.log('5 \t1 \t5 \t25 \t125')

let substr = 'You cannot end a sentence with because because because is a conjunction'
console.log(substr.slice(31,55) )

// Level 3

// question 1
let ss='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let tocount=/love/g
let arr=ss.match(tocount)
console.log('no of times love',arr.length)

// question 2
let tocountt=/because/gi
let arr1=substr.match(tocountt)
console.log('no of times beacuse' ,arr1.length)

// question 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx=/@|#|!|%|&|;|\$/g
console.log(sentence.replace(regEx, ""))

// question 4
const sen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regExp = /\d+/
console.log(sen.match(regExp))
console.log(sen.match(/\d+/g))
let arraynum =sen.match(/\d+/g)
let sum=0
for(let j=0 ; j<arraynum.length ; j++)
{
    sum += parseInt(arraynum[j])
}
console.log("sum " , sum)



