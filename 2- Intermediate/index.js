
// String properties and methods ---->
// Wrap string objects, dont memoirize methods. Just look up online.
// let text = 'Angel Soto';

// let result = text.length;
// console.log(result);
// // properties
// console.log(text.length);
// // METHODS
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// // console.log(text.charAt(9)); better way below
// console.log(text.charAt(text.length - 1)); // always gets the last value.
// console.log(text.indexOf('A')); // shows the index of whatever letter.
// console.log(text);
// console.log(text.trim()); // gets rid of whit space
// console.log(text.startsWith('Angel')) // true of false
// console.log(text.trim().toLowerCase().startsWith('angel'))
// console.log(text.includes('oto')) // does it have substings in the string.
// console.log(text.slice(0, 4))
// console.log(text.slice(-3))


// Template Literals ---->
// Backtick characters `` 
// Interpolation ${} - insert exprssion(value)
// const name = 'angel';
// const age = 24;
// // const sentence = "Hey it's " + name + ' and he is ' + age + ' years old.';
// const sentence = `Hey it's ${name} and he is ${age} years old.`;
// console.log(sentence)


// Array Properties and Methods ---->
// let names = ['John', 'Angel', 'Amber', 'Olga', 'Ben'];

// // length
// console.log(names.length);
// console.log(names[names.length - 1]);
// // concatenate
// const lastNames =['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames)
// console.log(allNames)
// // reverse method
// console.log(allNames.reverse());
// // unshift
// allNames.unshift('susy');// adds to begining
// allNames.unshift('anna');
// console.log(allNames)
// // shift
// allNames.shift() // removes first index of array
// allNames.shift()
// console.log(allNames)
// // push
// allNames.push('susy')
// allNames.push('anna')
// console.log(allNames)
// // pop
// allNames.pop() // removes from last index
// allNames.pop()
// console.log(allNames)
// // splice - mutates original array
// const specificNames = allNames.splice(2, 1)
// console.log(specificNames)
// console.log(allNames)

// Arrays and for loop - combine building blocks to build something cool.
// const names = ['anna', 'susy', 'bob'];
// const lastName = 'shakeandbake';
// let newArray = [];

// // for loop
// for (let i = 0; i < names.length; i++) {
//  console.log(names[i]);
//  newArray.push(names[i])

//  const fullName = `${names[i]} ${lastName}`;
//  newArray.push(fullName)

//  // newArray.push(`${names[i]} ${lastName}`)
// };
// // newArray.unshift(lastName)

// // console.log(names)
// console.log(newArray)


// Excercise - Functions, return, if, arrays, for loop - Using what you learned together.
// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//  let total = 0;
//  for(let i = 0; i < arr.length; i++){
//   // console.log(arr[i]);
//   total += arr[i];
//  }
//  // console.log(total);
//  if(total > 100){
//   console.log(`Whoa! your spending a lot.`)
//  } else {
//   console.log(`Your total is less than a 100.`)
//  }
//  return total;
// };

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//  gas: gasTotal,
//  food: foodTotal,
//  random: randomTotal
// });


// Refrence vs Value ---->
// Primitive Data Types = String, Number, Symbol, Boolean, Undefined, Null, Arrays, Functions, objects
// Typeof

// When assigning primitive data type value to a variable any chages are made directly to that value, without affecting original value.

// When assigning non-primitive data type value to a variable is done by refrence so any changes will affect all the references.

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = {name:'bob'};
// let person2 = person;
// person2.name = 'susy'
// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);


// Null and undefined - Both repersent "no value" ---->
// Undefined - "javascript can not find value for this"

// variable without value
// missing function arguments
// missing  object properties
// let number2 = 20 + undefined // 20 + 0;
// console.log(number2)

// // null - "developer sets the value"
// let number = 20 + null // 20 + 0;
// console.log(number)


// Truthy and Falsy ---->
// All values in javascript are either truthy or falsy. Below are falsy values.
// "", '', ``, 0, -0, NaN, false, null, undefined

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = '';
// if(text){
//  console.log('hey the value is truthy');
// } else {
//  console.log('hey the value is falsy');
// }

// if(bool1) {
//  console.log(`Hey it works!`)
// }
// if(bool2) {
//  console.log(`Hey it also works!`)
// }


// ternary Operator ---->
// unary operator - typeof
// let text = 'some text';
// // console.log(typeof text); // operand
// // binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// // ternart operator
// // condition ? (runs if true) : (runs if false)
// const value = 1 < 0; // check this value

// value ? console.log('value is true') : console.log('value is false');
// or
// if (value) {
//  console.log('value is true');
// } else {
//  console.log('value is false');
// };


// Global scope vs Local scope ---->
// any variable outside code block {} is said to be in Global scope.
// can be access anywhere in the program.
// lookOut for : name collisions, modify by mistake.
// VAR - performs different when it comes to if statements and code blocks.
// ex - Global Scope
// let name = 'Angel';
// name = 'peter';
// // const name1 = 'Steven';

// function calculate(){
//  console.log(name); // peter
//  name = 'orange'

//  function inner(){
//   name = 'inner name value';
//   console.log(`this is from inner function ${name}`); // inner name value
//  }
//  inner()
// }
//  calculate()

//  if (true) {
//   console.log(name); 
//   name = 'pants';
//  }
// console.log(`my name is ${name} and im awsome`) // pants
// ex - Local Scope - cannot be access from outside the code block.
// let name = 'bobo';

// function calculate() {
//  const name = 'john';
//  const age = 25;
//  becomesGlobal = 'global variable';
// }
// calculate();
// console.log(becomesGlobal);

// if (true) {
//  const name = 'john';
// }
// {
//  const name = 'john';
// }

// console.log(`my name is ${name} and i'm awesome`);


// Variable Lookup ---->
// {} - code block - javascript searches for local scope first then a global scope.
// const globalNumber = 5;

// function add(num1, num2){
//  // const globalNumber = 20;
//  const result = num1 + num2 + globalNumber;
//  function multiply() {
//   // const globalNumber = 100;
//   const multiplyResult = result * globalNumber;
//   console.log(multiplyResult);
//  }
// console.log(multiplyResult)

//  multiply();
//  return result;
// }
// console.log(add(3, 4))


// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens ---->

// Callback Function - passed to another function as an argument and executed inside that function.

// Higher Order function - accepts another function as an argument or returns another function as a result.

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure).

// function greetMorning(name){
//  const myName = 'john';
//  console.log(`Good morning ${name}, my name is ${myName}`)
// }
// function greetAfternoon(name){
//  const myName = 'john';
//  console.log(`Good afternoon ${name}, my name is ${myName}`)
// }
// greetMorning('bobo')
// greetAfternoon('peter')

// function morning(name) {
//  return `Good morning ${name.toUpperCase()}`
// }
// function afternoon(name) {
//  return `Good morning ${name.repeat(3)}`
// }
// function greet(name, callback){
//  const myName = 'Angel';
//  console.log(`${callback(name)}, my name is ${myName}`)
//  // callback()
// }
// greet('bobo', afternoon); // do not invoke callback when calling a function.
// greet('peter', afternoon);


// Powerful array methods ---->
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls CALLBACK against each item in a array. Refrence Item in the callback parameter.

// const numbers = [0, 1, 2, 3, 4];
// // show all numbers
// for (let i = 0; i < numbers.length; i++){
//  console.log(numbers[i]);
// };


// forEach ---->
// does not return a new array
// const people = [
//  {name: 'bob', age: 20, position: 'developer'},
//  {name: 'peter', age: 25, position: 'designer'},
//  {name: 'susy', age: 30, position: 'the boss'},
// ];

// function showPerson(person){
//  console.log(person);
// };
// // people.forEach(showPerson)

// people.forEach(showPeople => {
//  console.log(showPeople)
// });

// people.forEach(function(item){
//  console.log(item.position.toUpperCase()) // targets only the positions in the array
// });


// map ---->
// does return a new array
// does not change size of original array
// uses values from original array when making new one

// const people = [
//  {name: 'bob', age: 20, position: 'developer'},
//  {name: 'peter', age: 25, position: 'designer'},
//  {name: 'susy', age: 30, position: 'the boss'},
//  {name: 'anna', age: 35, position: 'the boss'}
// ];
// const ages = people.map( (person) => {
//  return person.age + 20;
// })

// // This takes the properties in the objecct above and creates a new object layout.
// const newPeople = people.map( (person) => {
//  return {
//   firstname: person.name.toUpperCase(),
//   oldAge: person.age + 20,
//  }
// })
// const names = people.map( (person) => {
//  return `<h1>${person.name}</h1>`
// });
// document.body.innerHTML = names.join('') // This pushes the names function to the document.
// console.log(names)


// filter ---->
// does return a new array
// can manipulate the size of a new array
// returns based on condition 

//  const people = [
//  {name: 'bob', age: 20, position: 'developer'},
//  {name: 'peter', age: 25, position: 'designer'},
//  {name: 'susy', age: 30, position: 'the boss'},
//  {name: 'anna', age: 35, position: 'the boss'}
// ];

// const youngPeople = people.filter( (person) => {
//  return person.age <= 25;
// })

// const developer = people.filter( (person) => {
//  return person.position === 'senior developer';
// })

// console.log(youngPeople)
// console.log(developer)


// find ---->
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

//  const people = [
//  {name: 'bob', age: 20, position: 'developer', id: 1},
//  {name: 'peter', age: 25, position: 'designer', id: 2},
//  {name: 'susy', age: 30, position: 'the boss', id: 3},
//  {name: 'anna', age: 35, position: 'the boss', id: 4}
// ];

// const names = ['bob', 'peter', 'susy'];
// console.log(names.find( (name) => {
//  return name === "bob"
//  })
// );
// // using find
// const person = people.find( (person) => {
//  return person.id === 3;
// });
// console.log(person.name);
// // using filter
// const person2 = people.filter( (person) => {
//  return person.id === 3;
// });
// console.log(person2[0].name);


// reduce - can replace .map() and .filter() - however challenging.
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

//  const people = [
//  {name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
//  {name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
//  {name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500},
//  {name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500}
// ];

// const total = people.reduce( (acc, currItem) => {
//  // make sure you return accumilator in this case [acc]
//  console.log(`total ${acc}`);
//  console.log(`current money : ${currItem.salary}`);
//  acc += currItem.salary
//  return acc;
// }, 0); // or {object}, [array])

// console.log(total)


//Math
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.56789; 
// const result = Math.ceil(number);

// const number = 4.56789;
// const result = Math.sqrt(number);

// const number = 4.56789;
// const result = Math.PI(number);
// const result = Math.min(1, 2, 3, 4, 5);
// const result = Math.max(1, 2, 3, 4, 5);
// const result = Math.random();
// console.log(result)


// Date 
// const months = [
//  'January',
//  'February',
//  'March',
//  'April',
//  'May',
//  'June',
//  'July',
//  'August',
//  'September',
//  'October',
//  'November',
//  'December'
// ];

// const days = [
//  'Sunday',
//  'Monday',
//  'Tuesday',
//  'Wednsday',
//  'Thursday',
//  'Friday',
//  'Saturday'
// ];

// // const date = new Date();
// // console.log(date)

// const date = new Date('1/12/2004');
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear())

// const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`
// console.log(sentence)













