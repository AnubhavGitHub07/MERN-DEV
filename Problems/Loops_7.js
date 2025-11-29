// Generate the first n terms of the Fibonacci sequence using a loop.

let x = 10;
let a1 = 0;
let a2 = 1;
let sum = 0;

console.log(a1);
console.log(a2);

for(let i = 2 ; i<x ; i++){
    sum = a1 + a2;
    a1 = a2;
    a2 = sum;
    console.log(sum);
}