// Write a program to reverse the digits of a number using a loop.

let x = 123;
let temp = 0;
while(x>0){
    let digit = x % 10;
    temp = temp * 10 + digit;
    x=Math.floor(x/10);
}

console.log(temp);