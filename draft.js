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

// const age = 17
// const pays = 'FR'
// const peutConduireFrance = pays == 'FR'
// const peutConduireUS = pays === 'US' &&

// if (
//     (pays === 'FR' && age >= 18) ||
//     (pays === 'US' && age >= 16)
// ) {
//     console.log("Vous avez le droit de conduire")
// } else if () {

// } else {
//     console.log("Vous n'avez pas le droit de conduire");
// }
// ;

// switch (pays) {
// case 'FR':
//     console.log("Je suis en France");
//     break;
// case 'US':
//     console.log("Je suis aux US");
//     break;
// case 'ISR':
//     console.log("Je suis en Israel");
//     break;
// default:
//     console.log("Je suis dans un pays inconnu");
//     break;
// }

// const year = 2023
// const birthYear = prompt('quel est votre année de naissance ?')
// const age = year - birthYear

// if (age<=13){
// console.log('Lilo & Stitch');
// } else if (age>13 && age<18) {
// console.log('Matrix');
// } else {
// console.log('Evil Dead');
// }

// const a = prompt('Enter a number: ')
// const b = prompt('Enter another number: ')
// const c = a * b

// if(isNaN(c)){
//     console.log(`impossible operation: ${a} x ${b}`);
// } else {
//     if (c > 0) {
//         console.log(`${c} is positive`);
//     } else {
//         console.log(`${c} is negative`);
//     }
// }

// let i = 0;
// while (i<10){
//     console.log('Bonjour'+i);
//     i++
// }

// const notes=[12,13,14,15]
// for (let i in notes){
//     console.log(notes[i]);
// }
// function canDrive (age, pays) {
// if (
//         (pays === 'FR' && age >= 18) ||
//         (pays === 'US' && age >= 16)
//     ){
//         return true
//     }
//     {
//     return false
//     }
// }

// let i = 0;

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

// const a = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     console.log(`${this.firstname} ${this.lastname}`);
//   },
// };

// const maFonction = () => {
//   console.log(this);
// };

// a.fullname();
// console.log("Hello".toUpperCase());

// maFonction.call(3, 1, 2);

// const isPair = function (a, fn) {
//   if (a % 2 === 0) {
//     fn();
//   } else {
//     console.log("Mon nombre est impair");
//   }
// };

// isPair(7, function () {
//   console.log("Mon nombre est pair");
// });

// générer un nombre aléatoire entre 0 et 10
// 3 essais de pour deviner le mot
// isRight(n)
// guess() choisir un mot true si le bon mot et false si non

// function getReturnInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// function isRight(n) {
//   return solution === n;
// }

// function guess() {
//   const number = prompt("Entrez un chiffre" * 1);
//   return isRight(number);
// }

// for (i = 0; i <= 3; i++) {
//   if (guess()) {
//     console.log("Bravo");
//     break;
//   } else if (i === 2) {
//     console.log("Vous avez perdu");
//   }
// }

// const myString = {
//   kayak: true,
//   sos: true,
//   Kayak: true,
// };

// const sentence = "The movie is not that bad, I like it";
// const wordNot = sentence.length("not");
// const wordBad = sentence.length("bad");

// if (wordBad>wordNot){
//     sentence.replace('not', 'bad', 'good')
// }

// let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
// for (i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// // Write the command to remove “Greg” from the array.
// people = people.splice(1, 3);
// console.log(people);

// // Write the command to remove “James” from the array.
// people = people.splice(0, 2);
// console.log(people);

// // Write the command to add “Matt” to the front of the array.
// people.unshift("Matt");
// console.log(people);

// people.push("Samuel");
// console.log(people);

// for (i = 0; i < people.length; i++) {
//   if (people[i] != "Mary") {
//     console.log(people[i]);
//   } else {
//     break;
//   }
// }

// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.

// console.log(people.indexOf('Mary'));
// console.log(people.indexOf('Foo'));

// people = ["Greg", "Mary", "Devon", "James"];
// people.splice(2, 1, "Elizabeth", "Artie")
// console.log(people);

// let withBob=people.concat("Bob")
// console.log(withBob);

// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.languages.push("Go")
// console.log(programming.languages);

// programming.difficulty=7
// console.log(programming.difficulty);

// delete programming.jokes
// console.log(programming);

// programming.isFun=true
// console.log(programming);

// for (i=0;programming.languages.length();i++)
// console.log(programming.languages);

// let obj = {
//   firstname: "Samuel",
//   lastname: "Cohen",
//   occupation: "student",
// };

// console.log(obj.firstname);
// console.log(obj.lastname);
// console.log(obj.occupation);

// console.log(obj["firstname"]);
// console.log(obj["lastname"]);
// console.log(obj["occupation"]);

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

// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };

// programming.languages.push("Go");
// console.log(programming.languages);

// programming.difficulty = 7;
// console.log(programming);

// delete programming.jokes;
// console.log(programming);

// programming.isFun = true;
// console.log(programming);

// // for (let i in programming.languages) {
// //     console.log(programming.languages[i]);
// // }

// for (let i = 0; i < programming.languages.length; i++) {
//   console.log(programming.languages[i]);
// }

// for (let key in programming) {
//   console.log(key);
// }

// for (let key in programming) {
//     console.log([key]);
//   }



