// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);

// Using DOM methods, remove the last paragraph in the <article> tag.
const paragraph = document.getElementById("last");
paragraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
  console.log(h2);
  h2.style.background = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const article = document.querySelector("article");
const button = document.createElement("button");
// document.querySelector("btn").innerHTML=`<btn>Button</btn>`;
button.innerText = "click";
console.log(article);
article.append(button);

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

button.addEventListener("click", () => {
  for (let element of allParagraphs) {
    element.style.fontWeight='bold'
  }
});

const h4s=document.querySelectorAll('.h4s');
const lastParagraph=document.querySelector('#last')
console.log(h4s)

h1.addEventListener("mouseover", () => {
h1.style.fontSize="100px"
})
h2.addEventListener("mouseover", () => {
h2.style.fontSize="100px"
})

// Ex 2

// Retrieve the form and console.log it.
const form=document.querySelector("form")
console.log(form);

// Retrieve the inputs by their id and console.log them.
const fname=document.querySelectorAll("#fname")
const lname=document.querySelectorAll("#lname")
const submit=document.querySelectorAll("#submit")

console.log(fname);
console.log(lname);
console.log(submit);

// Retrieve the inputs by their name attribute and console.log them.
const firstnameInput = document.getElementsByName("firstname")[0];
const lastnameInput = document.getElementsByName("lastname")[0];
const submitInput = document.getElementsByName("submit")[0];
console.log(firstnameInput);
console.log(lastnameInput);
console.log(submitInput);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? to prevent the page from refreshing
submitInput.addEventListener("input",(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    });

// get the values of the input tags,
fname.value
lname.value
submit.value

// make sure that they are not empty,
for (input in inputs)
if (fname.value === ""){
    console.log("the value is empty");
} else {
    console.log("it's OK");
}

// create an li per input value, then append them to a the <ul class="usersAnswer"></ul>, below the form.
const liElement=document.createElement("li")
liElement.appendChild(document.createTextNode(input.value))
ulElement.appendChild(liElement)

const LiFirstName=document.createElement("li")
LiFirstName.textContent="First Name: " + firstnameInput
ulElement.appendChild(LiFirstName)

const LiLastName=document.createElement("li")
LiLastName.textContent="First Name: " + lastnameInput
ulElement.appendChild(LiLastName)

// Ex 3:

let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
  // console.log(allBoldItems);
  return allBoldItems;
}

function highlight() {
  getBoldItems().forEach((item) => {
    item.style.color = "blue";
  });
}

function returnItemsToDefault() {
  getBoldItems().forEach((item) => {
    item.style.color = "black";
  });
}

document.addEventListener("mouseover", () => {
  highlight();
});

document.addEventListener("mouseout", () => {
  returnItemsToDefault();
});