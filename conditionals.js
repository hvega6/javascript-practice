/**
 * Lesson 1 (continued)
 */

//Long Literal Strings

const frost =
  'Nature's first green\n is gold, ' +
  'Her hardest hue to hold. ' +
  'Her early leaf's a flower; ' +
  'But only so an hour. ' +
  'Then leaf subsides to leaf. ' +
  'So Eden sank to grief, ' +
  'So dawn goes down to day. ' +
  'Nothing gold can stay. ';

const frost2 =
  'Nature's first green is gold,\n\
  Her hardest hue to hold.\n\
  Her early leaf's a flower;\n\
  But only so an hour.\n\
  Then leaf subsides to leaf.\n \
  So Eden sank to grief,\n\
  So dawn goes down to day.\n\
  Nothing gold can stay.';

// console.log(frost);

// console.log(frost2);

// Template Literals

const frostLiteral = `Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

// console.log(frostLiteral);

// Sting interpolation with template literals

const a = 5;
const b = 10;

// console.log(
//   `'a' is assigned a value of "${a}", and 'b' is assigned a value of "${b}". Therefore, 'a' plus 'b' is equal to ${
//     a + b
//   } money: $${a}`
// );

/**
 *
 *
 * Lesson 2: Control Flow
 *
 */

// Scope
/**
 * Global scope: The default scope for all code running in script mode.
 * Module scope: The scope for code running in module mode.
 * Function scope: The scope created with a function.
 *
 * (for variables create with let or const)
 * Block scope: The scope created with a pair of curly braces (a block).
 *
 * */

// Global scope, with var this gets added to the window object
var pollution = 'sucks';

//let and var example
// {
//   var x = 1;
//   {
//     var x = 2; // same variable!
//     // console.log(x); // 2
//   }
//   // console.log(x); // 2
// }

{
  let x = 1;
  {
    let x = 2; // different variable
    // console.log(x); // 2
  }
  // console.log(x); // 1
}

/**
 *
 * Control Flow!!!
 *
 */
const x = 0;

// IF statements
if (x === 10) {
  // do this
  // console.log('x is 10!');
} else {
  //do this
  // console.log('x is not 10:(');
}

let something;

// if statement if checking if the variable something isn't defined
// alternative: if (typeof myVariable === "undefined") {}
if (!something) {
  // console.log("something isn't defined");
}

// console.log('file continues to run');

/**
 *
 * Nested if...else statements
 *
 */
//Ex:
const num1 = 10;

if (num1 > 30) {
  if (num1 % 10 === 0) {
    console.log('divisible by 10');
  } else {
    if (num1 % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
} else {
  console.log('30 or less');
}

/**
 * Chained if...else
 */
let result;

if (num1 > 10) {
  console.log('greater than 10');
} else if (num1 < 10) {
  console.log('less than 10');
} else if (num1 === 'hello') {
  console.log('im a string what?');
} else {
  console.log('10');
}

/**
 *
 * Switch Statements
 *
 */

let y = '2';

switch (y) {
  case '0':
    console.log('0');
    break;

  case '1':
    console.log('1');
    // whatever logic you need to do
    break;

  default:
    console.log('no matching cases ');
    break;
}

// Calculator Example
let x1 = 20;
let y1 = 10;
let operand = '&';
switch (operand) {
  case '+':
    console.log(x1 + y1);
    break;
  case '-':
    console.log(x1 - y1);
    break;
  case '*':
    console.log(x1 * y1);
    break;
  case '/':
    console.log(x1 / y1);
    break;
  default:
    console.log('Invalid Operand');
    break;
}

const keyPressed = 'ArrowRight';
let yCord = 0;
let xCord = 0;

switch (keyPressed) {
  case 'ArrowUp':
    console.log('Character moved up');
    yCord++;
    console.log(xCord, yCord);
    break;
  case 'ArrowDown':
    console.log('Character moved down');
    yCord--;
    console.log(xCord, yCord);
    break;
  case 'ArrowLeft':
    console.log('Character moved left');
    xCord--;
    console.log(xCord, yCord);
    break;
  case 'ArrowRight':
    console.log('Character moved right');
    xCord++;
    console.log(xCord, yCord);
    break;
  case 'Spacebar':
    console.log('Character jumped');
    break;
  default:
    // do nothing
    break;
}

/**
 *
 * Ternary Operators
 *
 */

// (conditional) ? value_if_true : value_if_false;
//=================

let firstName = 'Bobby';
console.log(firstName === 'Bob' ? 'Hi Bob!' : `Hi ${firstName}!`);

let number = 9;

let isTen =
  number === 10 ? 'yes' : number > 10 ? 'greater than 10' : 'less than ten';

console.log(isTen);