
// Task-7

let itemList = document.querySelector('#items');

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNodes
console.log(itemList.childNodes);

//childrem
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[1].style.backgroundColor = 'Yellow';

//firstElementChild
itemList.firstElementChild.textContent = 'Hello 1';

//lastElementChild
itemList.lastElementChild.textContent = 'Hello 2';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "Red";

/////////////Creating Element///////////////////////
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute ('title' , 'Hello Div');

let newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

console.log(newDiv);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1); 