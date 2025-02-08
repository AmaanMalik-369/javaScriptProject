let firstname = 'Kate'
let lastname = 'Wilson'
let fullname = firstname + lastname;

let firstName = 'Kate'
let lastName = 'Wilson'

//fist way
console.log(firstName)
console.log(lastName)
console.log(firstName , lastName)

//second way
let fullName = firstName + ' ' + lastName
console.log(fullName)

//third way
fullName = firstName.concat(' ').concat(lastName)
console.log(fullName)

//forth way
fullName = firstName.concat(' ',lastName)
console.log(fullName)

//length of full name
console.log('Length of fullName is ' +  fullName.length)

//change the case
console.log('Upper case is ' + fullName.toUpperCase())
console.log('Lower case is ' + fullName.toLowerCase())

let str1 = 'Clean World Green World'
console.log(str1)

let result = str1.replace(/World/g,'India')
console.log(result)
