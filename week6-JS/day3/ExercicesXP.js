// Ex 2:

// Transform the winBattle() function to an arrow function.

let winBattle = () => {
}

// winBattle () ? true : false;

// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// // Ex 3: Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false.

let x;

let isString = (x) => {
  if (typeof x==="string"){
    console.log(true);
  }else{
    console.log(false);
  }
}

// Ex 4:

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let x;
let y;

const sum = (x,y) => {console.log(x+y);}

sum(2,5)

// Ex 5:

// Function declaration
function weight(x) {
  console.log(x * 1000);
}

// // Invoking fonction
weight(3);

// // Arrow function
const weight = (x) => {
  console.log(x * 1000);
};

// Ex 6:

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function(nbofChildren, partnerName, location, jobTitle) {
//   // Create a sentence
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${nbofChildren} kids.`;

//   // Display the sentence in the DOM
  document.querySelector("p").textContent = sentence;
})(2, "Sarah", "Tel-Aviv", "Consultant");

// Ex 7:

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(username) {
  const div=document.querySelector("nav");
  const newDiv = document.createElement("div") //create a new div
  newDiv.innerHTML=username // inser the username in the div
  // div.innerHTML=`<div> ${username}  </div>`;
  div.appendChild(newDiv) // add the created div in the nav
})("Samuel");

function makeJuice(beverageSize) {
    let ingredients = [];
  
    function addIngredients(
      sizeDrink,
      firstIngredient,
      secondIngredient,
      thirdIngredient
    ) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
      // addIngredients().push(ingredients)
    }
    addIngredients(3, "tomato", "rhum", "banana");
  }
  makeJuice(3);
  
  function displayJuice() {
    newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
  }