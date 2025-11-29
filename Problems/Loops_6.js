// Write a program to reverse the digits of a number using a loop.

let x = 123;
let count = 0;
while(x>0){
    let digit = x % 10;
    count++;
    x=Math.floor(x/10);
}

console.log(count);