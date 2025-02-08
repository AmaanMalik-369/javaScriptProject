
let num=15
let i=2
let isPrime = true

while(i<num){
    if(num%i==0){
        isPrime = false
        break;
    }
    i++
}
if(isPrime == true)
{
    console.log('The number is Prime Number')
}else
{
    console.log('The number is Not Prime Number')
}


