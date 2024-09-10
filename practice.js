/*
1. How do we assign a value to a variable? A. With the assignment operator
let a = 
2. How do we change the value of a...
a =
3.How do we assign a value to a variable?
let a = 5
4.How do we change the value of a variable?
a = 5
5.How do we assign an existing variable to a new variable?
let b = a
6.What is pseudocoding and why should you do it?
Pseudocoding is a method of designing algorithms by writing a high-level 
description of the code in plain language or a simplified programming syntax.
It allows you to outline the logic and structure of your program without 
worrying about the specific syntax of a programming language.
*/

let firstVariable = "Hello World"; // Create firstVariable and assign "Hello World"
firstVariable = 42; // Change firstVariable to a number (this will cause an error, see note below)
let secondVariable = firstVariable; // Store firstVariable in secondVariable
secondVariable = "New String"; // Change secondVariable to a string
// Note: firstVariable cannot be reassigned since it's a constant. Use 'let' instead of 'const' for firstVariable.

// Create yourName variable
let yourName = "Hugo"; // Replace "Your Name" with your actual name
let greeting = "Hello, my name is " + yourName; // Concatenate strings

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); // Check if a is less than b
console.log(c > d); // Check if c is greater than d
console.log('Name' === 'Name'); // Check if both strings are equal
console.log(false === false); // Check if both boolean values are equal
console.log(e === 'Kevin'); // Check if e is equal to 'Kevin'
console.log(a -  b < c); // Check if a is less than b and b is less than c
console.log(a * a === d); // Simple arithmetic: add a to itself and subtract d
console.log(48 == '48'); // Check if 48 is equal to the number 48 (type coercion)