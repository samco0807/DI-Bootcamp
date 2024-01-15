// const a = "Salut"
// const b = "les gens"

// const person = {
//     firstname: 'John',
//     lastname:'Doe' ,
//     age: 24,
//     notes:[12,14,15],
//     job:{
//         name:'Developer',
//         hours:40,
//     }
// }

// console.log(person.firstname);
// console.log(person.notes[1]);
// console.log(person.job.name);
// person.job.name = 'Full Stack Developer'
// console.log(person.job.name);

// console.log(person.job);

// person['firstname']
// const clef = 'firstname'
// person[clef]
// console.log(clef);

// // console.log(notes.length);
//   console.log(person.notes.length);

// function greeting(name) {
//     i++
//   console.log(`Bonjour ${name}`);
// }

// console.log(greeting("John"));
// console.log(i);
// greeting("Jane");
// console.log(i);
// greeting("Sam");

// let notes=[12,13,14]

// function upNotes(notes) {
//     notes[0]++
// }

// upNotes(notes)
// console.log(notes);

// obj.hobby="music"

// console.log(obj);

// delete obj.occupation;
// console.log(obj);

// let namesAndHobbies = {
//     elie: "JavaScript",
//     matt: "jogging",
//     janey: "table building",
//     tim: "sailing"
// }

// namesAndHobbies.samuel="Arabic"

// console.log(namesAndHobbies);

// if ("daniel" in namesAndHobbies){
//     console.log("Samuel key exist");
// } else{
//     console.log(namesAndHobbies.key "doesn't exist");
// }

// Ex 4 JS functions

// First function to calculate the cost of the Hotel

// const oneNightCost = 140; //setting the price by night at 140$

// function hotelCost() {
//   let numberOfNights;
//   do {
//     numberOfNights = prompt("Enter a number of nights: "); //asking the user for a number of nights

//     if (Number(numberOfNights) <= 0) {
//       alert("You must enter a number more than 0.");
//     } else if (isNaN(numberOfNights)) {
//       alert("You must enter a number.");
//     } else if (numberOfNights === null) {
//       alert("Enter a correct number");
//     } else {
//       numberOfNights.trim() === "";
//       alert("You entered an empty string");
//     }
//   } while (
//     Number(numberOfNights) <= 0 ||
//     isNaN(numberOfNights) ||
//     numberOfNights === null ||
//     numberOfNights.trim() === ""
//   );

//   let totalCost = oneNightCost * numberOfNights; // if the user typed a number, multiply one night cost by the number of night
//   console.log(totalCost); // print the total cost
//   return totalCost;
// }

// const totalCostHostel = hotelCost();

// Second function to calculate the cost of the city

// cities = {
//   Paris: 220,
//   London: 183,
//   Other: 300,
// };

// function planeRideCost() {
//   let destination;

//   for (city in cities){
//     if (city===destination)
//  console.log(cities[city]);
// }else{
//   do {
//     destination = prompt("Enter a city: "); //asking the user for a number of nights
//     if (
//       typeof destination === "string" ||
//       destination === null ||
//       destination.trim()
//     ) {
//       alert("You must enter a string");
//     } else if ((city = "")) {
//       alert("You must enter a city.");
//     }
//   } while (city === number || city === "");
// }
//   return price;
// }

// Third function to calculate the cost of the car rent

// const oneDayRent = 40; //setting the price by night at 140$

// function rentCost() {
//   let numberDayRent;
//   do {
//     numberDayRent = prompt("Enter a number of nights: "); //asking the user for a number of nights

//     if (Number(numberDayRent) <= 0) {
//       alert("You must enter a number more than 0.");
//     } else if (isNaN(numberDayRent)) {
//       alert("You must enter a number.");
//     } else if (numberDayRent === null) {
//       alert("Enter a correct number");
//     } else {
//       numberOfNights.trim() === "";
//       alert("You entered an empty string");
//     }
//   } while (
//     Number(numberDayRent) <= 0 ||
//     isNaN(numberDayRent) ||
//     numberDayRent === null ||
//     numberDayRent.trim() === ""
//   );

//   let totalCostRent = oneNightCost * numberDayRent; // if the user typed a number, multiply one night cost by the number of night
//   console.log(totalCostRent); // print the total cost
//   return totalCostRent;
// }

// const button = document.getElementById("enter") //selector du button enter
// const input= document.getElementById("userinput")
// const ul = document.querySelector("ul")

// button.addEventListener("click", function () {
//   if (input.value.length>0){
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value))
//   ul.appendChild(li) // ajouter l'input à la liste
//   input.value="" // une fois qu'on a ajouté l'input à la liste, on efface l'input
// }
// })

// // on voudrait que l'ajout d'une entrée dans la liste fonctionne en faisant "entrée"
// input.addEventListener("keypress", function (event) {
//   console.log(event.which);
//   if (input.value.length>0){
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value))
//   ul.appendChild(li) // ajouter l'input à la liste
//   input.value="" // une fois qu'on a ajouté l'input à la liste, on efface l'input
// }
// })

// // function qui retourne la longueur de la chaine
// function inputLength() {
//     return input.value.length
// }

// // function qui ajoute élément dans la liste
// function createListElement() {
//     const li=document.createElement("li")
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li)
//     input.value=""
// }

// // function qui ajoute dans la liste après clic sur le bouton entrée
// function addListAfterClick() {
//     if (inputLength()>0){
//         createListElement()
//     }
// }

// // function qui ajoute dans la liste après qu'on tape sur entrée
// function addListAfterKeypress(event) {
//     if (inputLength()>0 && event.keyCode===13) {
//         createListElement()
//     }
// }

// button.addEventListener("click", addListAfterClick)
// input.addEventListener("keypress", addListAfterKeypress)

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