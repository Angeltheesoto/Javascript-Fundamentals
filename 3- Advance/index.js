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
 - nodeValue - is used to get the node value.
 - textContent
*/
// const item = document.getElementById('special4');
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;
// console.log(easyValue)


// GetAttribute(), SetAttribute ---->
/*
 - They are used to add or remove attributes or get them.
 - GetAttribute(); - Such as class and href or id. we can get it or set it.
 - SetAttribute(); - Such as class and href or id. we can get it or set it.
*/

// Finds what the id or class or href of whatever attribute yoiu set the item to.
// specific attribute
// const first = document.querySelector('.first2')
// const idValue = first.getAttribute('id')
// console.log(idValue)
// // href / specific attribute
// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);
// // add a attribute to a li item. and change the text.
// const last = link.nextElementSibling;
// last.setAttribute('class','first2');
// last.textContent = 'i also have a class of first'

// // all attributes
// const links = document.querySelectorAll('.first2');
// console.log(links)


// ClassList and ClassName ---->
/*
 className() - Gets the name of a class. Use if you know you just need to add one thing to a class.
 classList() - use to control it if you need to add more than just one change or attribute.
*/
// const first = document.getElementById('first-x11');
// const second = document.getElementById('second-x11');
// const third = document.getElementById('third-x11');
// // Gets the name of a class.
// // const classValue = first.className;
// // console.log(classValue)
// // if you assign it again it will overidde the ones before it.
// second.className = 'colors'
// second.className = 'text'
// // or use both
// second.className = 'colors text'

// const classValue = third.classList;
// console.log(classValue)
// // third.classList.add('colors');
// // third.classList.add('text');
// third.classList.add('text', 'colors'); // use this.
// // remove classes -
// third.classList.remove('text')
// // check if that element has a specific class -
// let result = third.classList.contains('colors')
// if(result){
//  console.log('Yes it has it')
// } else {
//  console.log('No it does not.')
// }


// CreateElement() --->
/*
 createElement('element')
 createTextNode('text content')
 element.appendChild(childElement)

 insertBefore('element', 'location');
*/
// const result12 = document.querySelector('#result-x12')
// // create empty element
// const bodyDiv = document.createElement('div');
// // create text node 
// const text = document.createTextNode('This is text i created in javascript')
// // get the bodyDiv and append the txt to it
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv)

// // this is an h2 tag that is created
// const heading = document.createElement('h2')
// // this is a text that is created.
// const headingText = document.createTextNode('dynamic heading')
// // This gives the text to the tag that is created above.
// heading.appendChild(headingText)
// // this adds a class to the h2 element created
// heading.classList.add('blue')
// // this pushes the h2 element to the div with the class of #result-x12
// result12.appendChild(heading)
// // console.log(result12.chidren);

// // insertBefore ---->
// // insertBefore('element', 'location');

// const result12 = document.querySelector('#result-x12')
// const first = document.querySelector('.red')
// const bodyDiv = document.createElement('div');
// const text = document.createTextNode('This is text i created in javascript')
// bodyDiv.appendChild(text);
// // This inserts it either before or after.
// document.body.insertBefore(bodyDiv, result12)
// const heading = document.createElement('h2')
// const headingText = document.createTextNode('dynamic heading')
// heading.appendChild(headingText)
// heading.classList.add('blue')
// result12.insertBefore(heading, first)
// console.log(result12.chidren);

// ReplaceChild ----> 
// replaceChild('new', 'old'); - this replaces the child of a parent element to anyhting else you make.

// const result12 = document.querySelector('#result-x12')
// const first = document.querySelector('.red')
// const bodyDiv = document.createElement('div');
// const text = document.createTextNode('This is text i created in javascript')
// bodyDiv.appendChild(text);
// // This inserts it either before or after.
// document.body.insertBefore(bodyDiv, result12)
// const heading = document.createElement('h2')
// const headingText = document.createTextNode('dynamic heading')
// heading.appendChild(headingText)
// heading.classList.add('blue')
// result12.insertBefore(heading, first)
// // this replaces the child of a parent element to anyhting else you make.
// const smallHeading = document.createElement('h6')
// const smallText = document.createTextNode(`i'm small heading text`)
// smallHeading.classList.add('red')
// smallHeading.appendChild(smallText)
// document.body.replaceChild(smallHeading, bodyDiv)

// console.log(result12.chidren);


// Prepend InnerText ---->
/*
- These are just another way to manipulate the dom.
 - prepend
 - innerText
*/
// const heading = document.createElement('h2')
// heading.innerText = `i am a dynamic heading`;
// // will show at the top of the page
// document.body.prepend(heading);


// Remove and RemoveChild ---->
/*
 - remove() -
 - removeChild() -
*/

// const result = document.querySelector('#result-x14')
// // this deletes whaatever you dont want to show in the dom
// // result.remove()
// const second = result.querySelector('#second-x14')
// result.removeChild(second)
// // second.remove()
// // console.log(second)


// InnerhTML and TextContent ---->
// const list = document.getElementById('first-x15');
// const div = document.getElementById('second-x15');
// const item = document.querySelector('.item-x15');
// // textContent gets the text
// console.log(div.textContent);
// // innerHTML gets all the html structure
// console.log(list.innerHTML);
// console.log(list.textContent);

// const randomVar = 'random value'

// // How to create anything you would in HTML andpush it to the DOM
// const ul = document.createElement('ul')
// ul.innerHTML = `<li class="item-x15">new list item | ${randomVar}</li>
//       <li>new list item</li>`
// document.body.appendChild(ul)
// // note that the abovew example will be outputted to the bottom of the page
// // How to add on to excisting content
// div.textContent += ' and Hello World'


// change CSS with style property ---->
/*
 - CSS - why we should use classList instead of style property.
*/

// styling this way in javascript is more complicated but can be used.
// const random = document.querySelector('.random');
// // console.log(random.style);
// random.style.backgroundColor = 'blue'
// random.style.color = 'white'
// random.style.fontSize = '3rem'
// random.style.textTransform = 'capitalize'

// // this is a better way to style the DOM in javascript.
// const random = document.querySelector('.random');
// random.classList.add('title');


// Events Overview ---------->

// Click Event ---->
/*
 select element
 addEventListener()
 what event, what to do
 */

// const btn = document.querySelector('.btn-x17')
// const heading = document.querySelector('.h2-x17')

// // use this way of using functions so you can call it whenever.
// function changeColor() {
//  let hasClass = heading.classList.contains('red');
//  if(hasClass === true) {
//   heading.classList.remove('red');
//  } else {
//   heading.classList.add('red')
//  }
// }
// btn.addEventListener('click', changeColor);
// this is the regular way of creating a function.
 // btn.addEventListener('click', () => {
 //  heading.classList.add('red')
 // })


 // Mouse Events ---->
 /*
 - click - fires after full action occurs
 - mousedown - button is pressed
 - mousedown - button is released
 - mouseenter - moved onto an element
 - mouseleave - moved out of an element
 */

// const heading = document.querySelector('.h2-x18');
// const btn = document.querySelector('.btn-x18');
// // your function will run when you click the button
// btn.addEventListener('click', () => {
//  console.log('you clicked me')
// })
// // your function will run when you click down on the button
// btn.addEventListener('mousedown', () => {
//  console.log('down')
// })
// // your function will run when you click up on the button
// btn.addEventListener('mouseup', () => {
//  console.log('up')
// })

// heading.addEventListener('mouseenter', () => {
//  heading.classList.add('blue')
// })

// heading.addEventListener('mouseleave', () => {
//  heading.classList.remove('blue')
// })


// Key Events
/*
 - keypress - when key is pressed
 - keydown - when key is down
 - keyup - when key is released
*/

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', () => {
//  console.log('you presed a key')
// })

// nameInput.addEventListener('keydown', () => {
//  console.log('you presed a key')
// })
// this shows what keys were pressed and in what order.
// nameInput.addEventListener('keyup', () => {
//  console.log(nameInput.value)
// });


// Event Object ---->
/*
 - event object argument e, evt
 - info about trigged event
 - event.type - Finds out what kind of event it is. ex - click event
 - event.currentTarget - Targets the element it is on.
 - this keyword - targets the element its on.
 - preventDefault() - prevents default behaviour. Stops something from happening.
*/
// const heading = document.querySelector('.h2-x20');
// const btn = document.querySelector('.btn-x20');
// const link = document.getElementById('link-x20')
//Targets the element it is on.
// heading.addEventListener('click', (event) => {
//  console.log(event.currentTarget)
//  console.log(this)
// })

// btn.addEventListener('click', (event) => {
//  event.currentTarget.classList.add('blue')
//  console.log(event.type)
// })

// function someFunc(e){
//  e.preventDefault();
// }
// link.addEventListener('click', someFunc);


// currentTarget Vs Target ---->
/*
 - currentTarget - always refers to the element to which the event handler has been attached to.
 - target - identifies the element on which the event occured.
*/
// const btns = document.querySelectorAll('.btn-x21')

// btns.forEach( (btn) => {
//  btn.addEventListener('click', (e) => {
//   // currentTarget - This turns everything green.
//   // console.log(e.currentTarget);
//   // e.currentTarget.style.color = 'green'

//   // Target - This only turns the one you click on turn green
//   console.log('target',e.target)
//   e.target.style.color = 'green'
//  })
// })


// Event Bubbling capturing ---->
/*
 - allows select dynamic elements
 - event propagation - order the events are fired
 - event bubbling - clicked element first then bubbles up -- default
 - event capturing - fires at the root and fires until reaches target.
*/

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e){
//  console.log('current target', e.currentTarget);
//  // console.log('target', e.target);
//  // if (e.target.classList.contains('link')) {
//  //  console.log('you clicked it');
//  // }
// }

// function stopPropagation(e){
//  console.log('You clicked')
//  e.stopPropagation()
// }

// // targets elements without even targeting them. thats what bubbling does.
// // list.addEventListener('click', stopPropagation);
// container.addEventListener('click', showBubbling, {capture: true});
// document.addEventListener('click', showBubbling, {capture: true});
// window.addEventListener('click', showBubbling, {capture: true});
// list.addEventListener('click', showBubbling, {capture: true});


// Event Propogation Example ---->
/*
 - allows select dynamic elements
 - event propagation - order the events are fired
 - event bubbling - clicked element first then bubbles up -- default

*/
// const container = document.querySelector('.container-x23');
// const btn = document.querySelector('.btn-x23');
// // const heading = document.querySelector('.heading-x23');

// function sayHello() {
//  console.log('Hello there!')
// }

// btn.addEventListener('click', function() {
//  const element = document.createElement('h1')
//  element.classList.add('heading');
//  element.textContent = `i'm inside the container`
//  container.appendChild(element)
// })
// container.addEventListener('click', function(e){
//  if(event.target.classList.contains('heading')){
//   console.log('hello')
//  }
// })

// heading.addEventListener('click', sayHello);


// Form submit ---->
/*
 - submit event listeners -
 - prevent default
 - how to get a value
*/

// const form = document.getElementById('form-x24');
// const name = document.getElementById('name-x24');
// const password = document.getElementById('password-x24');

// // this lets you access data that was input into the form.
// form.addEventListener('submit', function(e) {
//  e.preventDefault()
//  console.log('form submited');
//  console.log(name.value)
//  console.log(password.value)
// })


// Local Storage ---->
/*
 - why use local storage ? - because it keeps your data even when you close the browser.
 - Web storage API - provided by browser
 - session storage - passes data while our tab is still open.
 - local storage - passes even when you close the browser.
 - setItem, getItem, removeItem, clear
 - localStorage.setItem('name', 'angel');
 - sessionStorage.setItem('name', 'angel');
*/
// localStorage.setItem('name', 'angel');
// sessionStorage.setItem('name', 'angel');

// localStorage.setItem('name', 'Angel');
// localStorage.setItem('friend', 'peter');
// localStorage.setItem('job', 'developer');
// localStorage.setItem('address', 'street 123');

// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('name')
// // wont show becuse i cleared out the name above.
// const anotherName = localStorage.getItem('name');
// console.log(anotherName)
// // clears out all of local storage.
// localStorage.clear()


// Lical Storage with Multiple values ---->
/*
 - JSON.stringify() - 
 - JSON.parse() - 
*/
// const friends = ['john', 'peter', 'bob'];

// localStorage.setItem('friends', JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[2]);

// let fruits;

// if(localStorage.getItem('fruits')){
//  fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//  fruits = [];
// }

// console.log(fruits);
// // fruits.push('apple')
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits))









