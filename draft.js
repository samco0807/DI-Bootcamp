// const a = "Salut"
// const b = "les gens"

// const { error } = require("console");
// const { reject } = require("lodash");

// const { reject } = require("lodash");
// const { resolve } = require("path");

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

// let allBoldItems;

// function getBoldItems() {
//   allBoldItems = document.querySelectorAll("strong");
//   // console.log(allBoldItems);
//   return allBoldItems;
// }

// function highlight() {
//   getBoldItems().forEach((item) => {
//     item.style.color = "blue";
//   });
// }

// function returnItemsToDefault() {
//   getBoldItems().forEach((item) => {
//     item.style.color = "black";
//   });
// }

// document.addEventListener("mouseover", () => {
//   highlight();
// });

// document.addEventListener("mouseout", () => {
//   returnItemsToDefault();
// });

// Ex 2:

// Transform the winBattle() function to an arrow function.

// let winBattle = () => {
// }

// winBattle () ? true : false;

// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// Ex 1:

// function funcOne() {
//   let a = 5;
//   if(a > 1) {
//       a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// funcOne()
// funcTwo()
// funcThree()

// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }

// funcFour()
// funcFive()

// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// Ex 4:

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let x;
// let y;

// const sum = (x,y) => {console.log(x+y);}

// sum(2,5)

// // Ex 3:

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false.

// let x;

// let isString = (x) => {
//   if (typeof x==="string"){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }

// isString()

// Ex 5:

// Function declaration
// function weight(x) {
//   console.log(x * 1000);
// }

// // Invoking fonction
// weight(3);

// // Arrow function
// const weight = (x) => {
//   console.log(x * 1000);
// };

// Ex 6:

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function(nbofChildren, partnerName, location, jobTitle) {
//   // Create a sentence
//   const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${nbofChildren} kids.`;

//   // Display the sentence in the DOM
//   document.querySelector("p").textContent = sentence;
// })(2, "Sarah", "Tel-Aviv", "Consultant");

// Ex 7:

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function(username) {
//   const div=document.querySelector("nav");
//   const newDiv = document.createElement("div") //create a new div
//   newDiv.innerHTML=username // inser the username in the div
//   // div.innerHTML=`<div> ${username}  </div>`;
//   div.appendChild(newDiv) // add the created div in the nav
// })("Samuel");

// function makeJuice(beverageSize) {
//   let ingredients = [];

//   function addIngredients(
//     sizeDrink,
//     firstIngredient,
//     secondIngredient,
//     thirdIngredient
//   ) {
//     const newDiv = document.createElement("div");
//     newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
//     // addIngredients().push(ingredients)
//   }
//   addIngredients(3, "tomato", "rhum", "banana");
// }
// makeJuice(3);

// function displayJuice() {
//   newDiv.innerHTML = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
// }

// // Ex 1:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (i =0; i<colors.length; i++) {
//   console.log(`${i+1} choice is ${colors[i]}`);
// }

// if (colors.includes("Violet")){
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Ex 2:

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// for (let i = 0, y = 0; i < colors.length && y < ordinal.length; i++, y++) {
//   console.log(`${i + 1}${ordinal[y+1]} choice is ${colors[i]}`);
// }
// //
// // Ex 3:

// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];
// let welcomeStudents = [];
// welcomeStudents = users.map((user, index, arr) => {
//   // console.log(item.firstName);
//   welcomeStudents.push(`hello + ${user.firstName}`);
//   // console.log(`Hello ${user.firstName}`);
//   return user.firstName;
// });

// console.log(welcomeStudents);

// let welcomeStudents;

// welcomeStudents = users.map(user => {
//   console.log(`Hello ${user.lastName}`);
//   return user.firstName;
// });

// console.log(welcomeStudents);

// let fullStackResidents = []
// let fullStackResidents = users.filter(
//   (user) => user.role === "Full Stack Resident"
// );
// {
//   // fullStackResidents.push(user.role)
// }

// console.log(fullStackResidents);

// let myArray = [1, 2, 3, 4, 5, 10];

// const newArray = myArray.map((item, index) => {
//   return item * 2;
// });

// console.log(newArray);

// // Ex 3:
// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// const sentence = epic.reduce((accumulator, currenValue) => {
//   return `${accumulator} ${currenValue}`;
// });

// (accumulator, currentValue) => accumulator + currentValue;

// console.log(sentence);

// // Ex 6:
// const students = [
//   { name: "Ray", course: "Computer Science", isPassed: true },
//   { name: "Liam", course: "Computer Science", isPassed: false },
//   { name: "Jenner", course: "Information Technology", isPassed: true },
//   { name: "Marco", course: "Robotics", isPassed: true },
//   { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
//   { name: "Jamie", course: "Big Data", isPassed: false },
// ];

// const passedCourse = students.filter((student) => student.isPassed === true);
// {
// }

// console.log(passedCourse);

// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Ex 2:

// function displayStudentInfo(objUser) {
//   const { first, last } = objUser;
//   // console.log(`Your full name is ${first} ${last} `);
// }

// displayStudentInfo({ first: "Elie", last: "Schoppik" });

// // Ex 3:
// let users = { user1: 18273, user2: 92833, user3: 90315 };

// // let myArray=console.log(Object.entries(users));

// // console.log(doubledNumbers);

// // Ex 4:
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// // console.log(typeof member);

// Object;

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mamal extends Animal {
//   constructor(name, type, color, sound) {
//     super(name, type, color);
//     this.sound = sound;
//   }
//   sound(){
//     return this.sound, this.name, this.color, this.sound
//   }
// }

// const farmerCow = new Mamal(name, type, color, sound)
// farmerCow.sound("moos")

// console.log(`${farmerCow.sound}, I'm a ${type}, named ${name} and I'm ${color}`);

// DAILY CHALLENGE

// class Video{
//   constructor(title, uploader, time){
//     this.title=title
//     this.uploader=uploader
//     this.time=time
//   }

//   // Create a method called watch() which displays a string as follows:
//   watch(){
//     return `${this.uploader} watched all ${this.time} of ${this.title}!`
//   }
// }

// // Instantiate a new Video instance and call the watch() method.
// const newVideo=new Video("Titanic", "WeTransfer", 195)
// // console.log(newVideo.watch()); 
// const anotherVideo=new Video("Avatar", "DriveUpload", 200)
// // console.log(anotherVideo.watch());

// // Use an array to store data for five Video instances (ie. title, uploader, time)
// let Videos=[{}];
// // Videos.map(()=>{newVideo.this.uploader, this.time, this.title})
// Videos.push(Video.watch(this.uploader, this.time, this.title))
// console.log(Videos);

// // Loop through the array to instantiate those instances.
// for (let video in Videos)
// console.log(video);



// Exercises JSON:

// const marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }

// const jsonObject = JSON.stringify(marioGame). 
// // The nested object is converted automatically

// JSON.parse(marioGame)
// jsonObject = JSON.stringify(marioGame,null, 2 )

// DAILY CHALLENGE :
// const object= document.querySelectorAll("form")

// object.addEventListener("click", ()=>{
//   JSON.stringify()
// })

// // Ex 1:
// let number=console.log("Enter a number: "); 
// let compareToTen = new Promise ((resolve, rejected)=>{
//   if(number<=10){
//     resolve('Yeees');
//   } else{
//     rejected('Fail')
//   }
// })
// .catch(error=>console.log(error))

// // Ex 2:
// const promise = new Promise ((resolve, reject) => {
//   setTimeout(()=>{
//     resolve();
//   }, 2000);
//   reject()
// });

// promise.then((res)=> {
//     console.log("success");
//   })
  
// EX 2:

// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// const ex2=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Success");
//         }, 4000)
//     });

// const executePromise = async () => {
//     try {
//         let success=await ex2
//         console.log(success);        
//     } catch (error) {
//      console.log(error);   
//     }
// }

// executePromise()

// // Ex 3:
// const promiseResolve(number)=new Promise ((resolve, reject) => {
// resolve(3);
// reject("error")
// })

// Promise.reject(error)=new Promise ((resolve, reject) => {
//   reject("Boo!")})

// // DAILY CHALLENGE:

// 1ST DAILY CHALLENGE

// const makeAllCaps = (wordsArray)=>{
// new Promise((resolve, reject) => {
//   if(Array.isArray(wordsArray) && word in wordsArray==="string"){
//     resolve(wordsArray.toUppercase)
//   } else{
//     reject("this is not an array of words")
//   }
// })
// }

// const sortWords = () => {
// new Promise((resolve, reject) => {
//   if (sortWords>=4){
//   resolve(word.sort())
// console.log(word);
// }else{reject
// }
// })
// }

// 2ND DAILY CHALLENGE
// const toJs = () => {
//     new Promise(resolve, reject)
//     let morseObj
//     if (toJs=""){
//       resolve(JSON.parse(morseObj))
//       console.log(morseObj);
//   } else {
//       reject("error")
// }
// }

// const toMorse = (morseObj) => {
//   const userSentence = prompt("enter a word: ")
//   new Promise(resolve, reject)
    
//     if(userSentence=!morseObj)
// } resolve(toMorse=>toMorse.map(()=>))
// reject ("Error")

// joinWords = () => {}

// Exercices FETCH & ASYNC

// EX 1:
// console.log("Starting ...")

// const fetchExercice = () => {
//     console.log("Testing ...")
//     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//         .then((resp) => {
//             if(resp.ok){
//                 return resp.json()
//             } else {
//                 throw new Error("Wrong GIPHY")
//             }
//         })
//         .then((obj) => {
//             // console.log(obj) 
//         })
//         .catch(function (error) {
//             console.log(`We got the error ${error}`)
//         });
//     console.log("Work Done ...")
// }

// fetchExercice()

// Ex 3:

// const exercice3test1 = async () => {
//     let answer = await response.json()
//     let result = await console.log(objectStarWars.result)
// }

// const exercice3=async()=>{
//     try{
//         let response=await fetch('https://www.swapi.tech/api/starships/9/')
//         let data=await response.json
//         let result=data.result
//         console.log(result);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// 1/ "Calling"
// 2/ After 2 seconds : "resolved"

// DAILY CHALLENGE 1: FINISHED

// récupérer les éléments HTML

// const gitForm=document.getElementById('gitForm')
// const searchInput=document.getElementById('searchInput')
// const gifContainer=document.getElementById('gifContainer')

// // Fonction pour récupérer un gif aléatoire
// const fetchRandomGif = async(searchTerm) => {
  
//   try {
//         // Requête à l'API Giphy pour récupérer un gif aléatoire en fonction de la catégorie de recherche
//     const response=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${searchTerm}`)
//     const data=await response.json()
//     const gifUrl=data.data.image_original_url

//     // Créer un élément img pour afficher le gif
//     const gifElement=document.createElement("img")
//     gifElement.src=gifUrl
//     gifElement.classList.add("gif")

//     // Ajouter un bouton delete à côté du GIF
//     const gifDeleteButton=document.createElement("button")
//     gifDeleteButton.textContent = "Delete";
//     gifDeleteButton.classList.add("gifdelete")

//     // Ajouter un bouton delete all à côté du GIF
//     const gifDeleteAllButton=document.createElement("button")
//     gifDeleteAllButton.textContent = "Delete All";
//     gifDeleteAllButton.classList.add("gifdeleteall")

//     // Ajouter un event supprimer le gif au bouton delete
//     gifDeleteButton.addEventListener("click", () =>{
//       gifContainer.removeChild(gifElement)
//       gifContainer.removeChild(gifDeleteButton)
//     })

//     // Supprimer tout quand on clique sur le bouton delete all
//     gifDeleteAllButton.addEventListener("click", () =>{
//       gifContainer.innerHTML=''
//     })

//     // Ajouter le gif et le bouton supprimer et supprimer tout au conteneur
//     gifContainer.appendChild(gifDeleteButton)
//     gifContainer.appendChild(gifDeleteAllButton)
//     gifContainer.appendChild(gifElement)

//   } catch (error) {
//   console.error('Error fetching gif: ', error);  
//   }
// }
// gifContainer.innerHTML=''

// gitForm.addEventListener("submit", (e)=> {
//   e.preventDefault();

//     // Récupérer la valeur de la recherche de l'utilisateur
//   const searchTerm=searchInput.value;

//   gifContainer.innerHTML=''
//   // Supprimer les GIF précédents et les boutons "Supprimer"
//   fetchRandomGif(searchTerm)
// })

// DAILY CHALLENGE 2

const data=document.getElementById('data')
const parisLat=document.getElementById('ParisLat')
const parisLong=document.getElementById('ParisLong')
const nyLat=document.getElementById('nyLat')
const nyLong=document.getElementById('nyLong')
const hours=document.getElementById('hours')

    // Requête à l'API Sunrise pour récupérer l'horaire en fonction de la ville

    const parisHour = (parisLat, parisLong) = new Promise ((resolve)=>{
    resolve(
    const response=await fetch(`https://api.sunrise-sunset.org/json?${parisLat}&${parisLong}`)
    const data=await response.json()
    const hourUrl=data.data.hour_original_url
    )
  })
  
  const fetchHours = async(cityLat, cityLong) => {
    try {
    
    
    // Ajouter un output
    const citySunrise=document.createElement("h2")
    citySunrise.innerText=hourUrl

    // Ajouter un bouton delete à côté de l'heure
    const hourDeleteButton=document.createElement("button")
    hourDeleteButton.textContent = "Delete";
    hourDeleteButton.classList.add("hourdelete")

    // Ajouter l'output et le bouton delelte à la div
    hours.appendChild(citySunrise)
    hours.appendChild(hourDeleteButton)

  } catch (error) {
      console.error('Error fetching lat and long: ', error);  
  }

  data.addEventListener("submit", (e)=> {
      e.preventDefault();
        
      // Récupérer la valeur de la recherche de l'utilisateur
      const parisLatInput=parisLat.value 
      const parisLongInout=parisLong.value;
    
      // Supprimer les GIF précédents et le bouton "Supprimer"
      hours.innerHTML=''
      
      fetchHours(cityLat, cityLong)
    }) 
}
