






// variables - Most Basic building block
// Variables - store, access, modify === value
// declare, assignment operator assign value

let name = 'John Doe';
let address, zip, state;
address = "101 main street";
zip = '07670';
state = 'NY'
name = 'Jimmy jake'
console.log(address,zip,state);
console.log(name);

// rules for variables

/*
can contain digits, letters, underscore, $, must start with letters
no keywords
cannot start with a number
case sensitive
camel case or underscore
*/

// LET VS CONST VS VAR

// using VAR - can be reassigned on a global scope.
var value = "some value";
value = "some other value";

// using let - can be re-assigned in a block scope.
let nameTwo = "john";
nameTwo = "peter"

// usong const (CONSTANT) - cant br re-assigned.
const lastName = "jordan";

console.log(value);
console.log(nameTwo);
console.log(lastName);

// quotation
// '' or "" or ``

// string concatenation
// ex - 
const greeting = 'Hello';
const person = 'Angel';
let fullName = `${greeting} ${person}`
// or | console.log('greeting + ' ' + person) |

console.log(fullName)



// Numbers
// Loosely Typed = dont declare type
const number = 34;
const numberTwo = 1.245;
const numberThree = -100;
console.log(number)



