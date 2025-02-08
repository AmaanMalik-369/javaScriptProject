let value = 345
let output = 0


while(value>0)
    {

    let rem = value % 10 // 5
    output = output + rem   //  5
    value = Math.floor(value/10)  // 0
}

console.log('Output value is ' + output)


let arrNames = ['Mike','Ronny','Julie','Vibha','Pankaj','Preeti']

// option -1 using for each loop
for(let i in arrNames)
    {
    console.log('Name is ' + arrNames[i])
}



let age = 67

if(age == 18){
    console.log('Congrats - you are eligible from this year')
} else if(age>18){
    console.log('You are already eligible')
} else {
    console.log('You are not eligible')
}







let num1 = 100
let num2 = '100'


// == wll only compare the value
// === will compare data type as well as the value of two variable

if( num1 == num2){
    console.log('Matching')
}else{
    console.log('Not Matching')
}

