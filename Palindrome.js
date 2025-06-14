let name1='madam'

// option -1

let rev=''
for(let i=name1.length-1;i>=0;i--)
{
    let c=name1.charAt(i)//To get the character value at the particular position
    rev=rev+c
}
console.log(name1)
console.log(rev)
if (name1===rev){
    console.log('The String is Palindrome')
}else{
    console.log('The String is not a Palindrome')
}

// option - 2

let newName = name1.split('').reverse().join('');
if (newName === name1) {
    console.log('The word is a Palindrome');
} else {
    console.log('The given word is not a Palindrome');
}

// option -3
let i = 0;
let j = name1.length - 1
let result = true

while(i <= name1.length-1){
    if (name1.charAt(i) != name1.charAt(j)) {
        result = false
        break
    }
    i++
    j--
}
console.log(result)
