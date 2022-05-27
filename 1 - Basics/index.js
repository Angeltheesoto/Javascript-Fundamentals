

// alerts each button --- 
// document.querySelectorAll('.btn').forEach(item => {
//    item.addEventListener('click', () => {
//     alert('hello people ')
//    })
//   })

// helper method ----
// How to return values from your code.
// document.write('hello world')
// alert('hello world')
// console.log('hello world')

// examples->
// document.write({name: 'John'})
// alert({name: 'John'})
// console.log({name: 'John'})

// variables - Most Basic building block
// Variables - store, access, modify === value
// declare, assignment operator assign value

// let name = 'John Doe';
// let address, zip, state;
// address = "101 main street";
// zip = '07670';
// state = 'NY'
// name = 'Jimmy jake'
// console.log(address,zip,state);
// console.log(name);

// rules for variables ----

/*
can contain digits, letters, underscore, $, must start with letters
no keywords
cannot start with a number
case sensitive
camel case or underscore
*/


// LET VS CONST VS VAR ----

// using VAR - can be reassigned on a global scope.
// var value = "some value";
// value = "some other value";

// using let - can be re-assigned in a block scope.
// let nameTwo = "john";
// nameTwo = "peter"

// using const (CONSTANT) - cant be re-assigned.
// const lastName = "jordan";

// console.log(value);
// console.log(nameTwo);
// console.log(lastName);

// quotation ----
// '' or "" or ``

// string concatenation----
// ex - 
// const greeting = 'Hello';
// const person = 'Angel';
// let fullName = `${greeting} ${person}`
// or | console.log('greeting + ' ' + person) |

// console.log(fullName)



// Numbers ----
// Loosely Typed = dont declare type
// const number = 34;
// const numberTwo = 1.245;
// const numberThree = -100;
// console.log(number)

// const slices = 10;
// const children = 3;
// const amount = slices % children;
// console.log(amount)


// Implicit Type Conversion ----
// Turns string numbers into numbers.

// let number3 = '10';
// let number4 = '23';
// // const  result2 = number3 - number4; this gets a number
// const  result2 = number3 + number4; // this gets a string
// console.log(result2)


// javascript 7 data types ----

// Primitive data types - string, number, boolean, null, undefined, symbol
// Object - Arrays, Functions, Objects

// Typeof -
// Operator (typeof variable) (typeof value)

// String -
// const text = 'some text'

// Number -
// const number = 45;

// Boolean -
// true or false -> let value1 = true; let value2 = false;

// Null -
// const result = null;

// Undefined -
// let name;

// Symbol(ES6) -
// console.log(typeof text);


// Arrays, functions, objects ----
// Arrays [] -, 0 index based

// array
// const friends = [
//  'Bob',
//  'Anna',
//  'Susy',
//  // 10,
//  // null,
//  // undefined
// ];

// let bestFriend = friends[2];
// friends[4] = 'anna'
// console.log(friends)
// console.log(friends[4])
// console.log(bestFriend)

// console.log(friends[3])

//for loop
// friends.forEach(list => {
//  console.log(list)
// })
// function listItems() {
//  for(let i = 0; i < friends.length; i++) {
//   console.log(friends[i])
//  }
// }
// listItems()

// function, parameters, arguments ----

// repeated code takes too long
// console.log('Hello there Bob')
// console.log('Hello there Anna')
// console.log('Hello there Susy')
// instead make a a function
// function greeting(person) {
//  console.log(`Hello there ${person}`)
// }
// greeting(friends[0])

// looping a string with different names in an array ----
// const demo = document.querySelector('#demo');
// // friends.pop() // removes last item of array
// friends.push('Angel', 'Amber', 'Travis') // add item to end of array
// friends.shift() // removes first element in array
// friends.unshift('Steven') // adds an element to the beginning of an array

// friends.forEach(list => {
//  demo.innerHTML += `Hello there ${list} <br>`
//  // console.log(`Hello there ${list}`)
// })

// using REURN ----

// Below we want to create a function that changes inch to centemeters = 1 inch = 2.54cm

// const wallHeight = 80;

// function calculate(value) {
//  console.log('The value in cm is : ' + value * 2.54 + ' cm')

 // const newValue = value * 2.54
 // return newValue // or just return the equation

//  return value * 2.54
// };

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height]; 
// console.log(dimensions); // this returns undefined because there is no return value in the function above.


// Expressions/ Functions -
// expressions is another wat to define a function.
// function addValues(num1, num2) {
//  return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);
// // function expression
// const add = function addValues(num1, num2) {
//  return num1 + num2;
// }
// // const thirdValue = add(5, 6)
// const values = [firstValue, secondValue, add(5, 6)];
// console.log(values);

// const multiply = (num1, num2) => num1 * num2;


// Objects -
// use key/ value pairs methods. Dot notation
// const person = {
//  name: 'Angel Soto',
//  age: 24,
//  'Eye Color': 'Brown',
//  married: false,
//  siblings: ['Max Santos', null],
//  greeting: (para, para2) => {
//   return `${para} ${para2}`
//  }
// };

// console.log(person.greeting(person.name, person.age))


// conditional Statements
// >, <, >=, <=, ==, ===, !=, !==
// if(1  === 1) {
//  console.log(true)
// }
// //
// if(1 === '1') {
//  console.log(true)
// } else {
//  console.log(false)
// }
// //
// const num1 = 6;
// const num2 = 6;
// const result = num1 == num2;
// if(num1 > num2) {
//  console.log('First number is bigger than second number.')
// } else if(result) {
//  console.log('Both are equal to eachother.')
// } else {
//  console.log('Second number is bigger than first')
// }

// Logical operator -
// ( || - OR ), ( && - AND), !
// const name = 'Angel';
// const age = 24;

// if(name === 'bob' && age === 24) {
//  console.log('hello there user');
// } else if(name === 'Angel' && age === 24) {
//  console.log('wrong values');
// }

// switch statements
// dice values: 1 - 6
// const dice = 2;

// switch (dice) {
//  case 1:
//   console.log('You got one.');
//   break;
//  case 2:
//   console.log('You got two.');
//   break;

//  default:
//   break;
// }


// LOOPS ----

// While loop - Repeatedly run a block of code while the condition is true.
// let amount = 10;
// while (amount > 0) {
//  // console.log('I have ' + amount + ' dollars and im going to the mall');
//  console.log(`I have ${amount} dollars and im going to the mall`);
//  amount--;
// };

// Do While loop - Repeatedly run a block of code while a condition is true.
// code block first, condition second
// let money = 0;
// do{
//  console.log('You have ' + money + ' dollars');
//  money++;
// }
// while(money < 10)

// For Loop - repeatedly runs a block of code while condition is true.
// for(let i = 10; i >= 0; i--){
//  console.log('countdown: ' + i)
// };
