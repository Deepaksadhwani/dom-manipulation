console.log(document.title);
document.title = "Dom manipulation";

console.log(document.all);
console.log(document.all[4]);

console.log(document.getElementById("title"));

var content = document.getElementById("header-title");
content.innerHTML = "<h3>change the title</h3>";
content.style.border = "1px solid black";

var addItem = document.getElementById("main");
console.log(addItem.childNodes[1]);
addItem.childNodes[1].style.fontWeight = "bold";
addItem.childNodes[1].style.color = "green";

var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";

for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}

var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var seconditem = document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.backgroundColor = "green";

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display = "none";

var odd = querySelector(".list-group-item:nth-child(odd)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "white";
}

// travelsing  the dom //
var itemList = document.querySelector('#items')
// parentNode 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";

//childNode 
console.log(itemList.childNodes);

//childrenNode
console.log(itemList.children);


//first child 
console.log(itemList.firstChild);

// first element child
console.log(itemList.firstElementChild);

// last child 
console.log(itemList.lastChild);

//last element child
console.log(itemList.lastElementChild);

//next sibiling 
console.log(itemList.nextSibling);

// next sibiling element
console.log(itemList.nextElementSibling);

// previous sibiling element 
console.log(itemList.previousSibling);

// previous element sibling 
console.log(itemList.previousElementSibling)

//create element
var newdiv = document.createElement("div");

// class name
newdiv.className = "hello";

// set attribute 
newdiv.setAttribute("title", "hello div");

// creating Text node
var newDivText = document.createTextNode('hello world')

// append child
newdiv.append(newDivText)

var container = document.querySelector(".container");
var h2 = document.querySelector('h1');

container.insertBefore(newdiv,h2);

//adding text before item 1

var newItem = document.createElement("li");
newItem.className = "list-group-item";
var text2 = document.createTextNode("Hello world");
newItem.appendChild(text2);
console.log(newItem);

container.insertBefore(newItem,h2);