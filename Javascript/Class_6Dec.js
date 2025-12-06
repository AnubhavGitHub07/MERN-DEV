//call-back functions

// a callback is a function which is passed as an argument to another
//finction and is executed later , usually after some operations completes.

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); 
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Anubhav", sayBye);


// A closure is created when a function remembers the variables from its parent function’s scope even after the parent function has finished executing.
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c = counter();
c(); // 1
c(); // 2


// Scope determines where a variable is accessible in your code.

// JavaScript has:
// Global Scope
// Function Scope
// Block Scope (let/const)

let a = 10; // global

function test() {
  let b = 20; // function scope
  if (true) {
    let c = 30; // block scope
  }
  console.log(b); // works
  console.log(c); // error
}

test();
