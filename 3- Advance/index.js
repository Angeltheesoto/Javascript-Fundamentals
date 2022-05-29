// DOM!!!!!!! ---->
// Will learn ---->
/*
 - Select Elements
 - Traverse DOM
 - Insert/Remove Elements
 - Apply Styling
 - Add/Remove CSS Classes
*/

// DOM - Document Object Model.
// Principals of using the DOM ---->
/*
- Similar to CSS.
- Select the element or group of elements that we want to affect.!!!!! Remember this.
- Decide the effect we want to apply to the selection.

- Many different ways to target the DOM - Change colors.
document.body.style.backgroundcolor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

- assign to a variable.
const element = document.getElementById('element');

- do something
document.querySelector('element'); 

- window object
console.log(window);

- returns a node object or a node list, which is an arrayLike object.
const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn)

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn)
*/


// Window object = browser api ---->
// window object - It gives us methods and properties to work with the browser.
// Document
// console.dir - lets you see what methods and other things you can use with it.
// window is already defined so you dont need to add window.

// examples-
// alert('hello')
// console.log(window)
// console.dir(angel)

// let angel = [{
//  1: 1,
//  2: 2,
//  3: 3
// }]
// console.dir(angel)


// getElementById(element); ---->
// - Most used method to get an element from the HTML document.
// Select the element or group of elements that we want !!!!! Remember this.
// Decide the effect we want to apply to the selection

// const h1 = document.getElementById('exTwo');
// h1.style.color = 'red';

// // Refractor
// const btn = document.getElementById('btn2');
// btn.style.backgroundColor = 'blue'
// btn.style.color = 'white';


// Get elements by tag name ---->
/*
 - getElementByTagName('tagname'); 
 - node-list = array-like object
 - index, length property but not array methods
*/
// gets the tags
// const headings = document.getElementsByTagName('h3');
// // console.log(headings);
// headings[0].style.color = 'red'; // changes first h3 tags to red.
// // console.log(headings.length)

// const items = document.getElementsByTagName('li');
// // cant loop through h3 because its not an array.
// // items.forEach(item => {
// //  console.log(item);
// // });

// items[2].style.color = 'orange';
// const betterItems = [...items];

// betterItems.forEach(item => {
//  // console.log(item);
// });
// console.log(items)
// console.log(betterItems)


// Get element by Class name ---->
/*
 - getElementsByClassName('classname');
 - node-list = array-like object
 - index, length property but not array methods
*/
// const listItems = document.getElementsByClassName('special');
// listItems[1].style.color = 'orange';

// QuerySelector and QuerySelectorAll ---->
/*
 - querySelector('any css'); - selects single
 - querySelectorAll('any css'); - selects all
*/

// const result = document.querySelector('#result')
// result.style.backgroundColor = 'blue';
// // selects the first item
// const item = document.querySelector('.special2');
// console.log(item)
// // Selects last item 
// const lastItem = document.querySelector('li:last-child')
// console.log(lastItem)

// const list = document.querySelectorAll('.special2');
// // console.log(list)
// list.forEach(item => {
//  item.style.color = 'red';
//  // console.log(item)
// })


// Navigate the DOM - Children ----->
/*
 - childNodes - returns all childNodes including whitespace which is treated as a text node
 - children
 - firstChild
 - lastChild
*/

// const result = document.querySelector('#result2');
// // displays all children even white space
// const allChildren = result.childNodes;
// console.log(allChildren)
// // displays only the items not the white space or text
// const children = result.children;
// console.log(children)
// // gets all child nodes.
// console.log(result.firstChild)
// console.log(result.lastChild)


// // parentElement ---->
// // How to go upwards in the dom to get the parent elements using parentElement()
// const heading = document.querySelector('h4')
// // console.log(heading.parentElement.parentElement.parentElement)
// // - This will target that parent element and all its children -
// const parent = heading.parentElement;
// parent.style.color = 'red';


// Navigate the DOM - NextSibling, PrevSibling ---->
/*
 - previousSibling
 - nextSibling
 - return whitespace
*/

// const first = document.querySelector('.first');
// console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = 'red');
// console.log(second)


// const last = document.querySelector('#last')
// const third = last.previousSibling.previousSibling;
// console.log(third)
// console.log(last.nextSibling.nextSibling)

// or refactor

// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';

// const last = document.querySelector('#last')


// Textcontent and nodeValue ---->
/*
 - nodeValue
 - textContent
*/



















