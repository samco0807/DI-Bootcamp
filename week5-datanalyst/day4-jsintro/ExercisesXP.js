// Ex 1:

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// Write code to remove “Greg” from the people array.
people.splice(0, 1)
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason")
console.log(people);

// Write code to add your name to the end of the people array.
people.push("Samuel")
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
console.log(people.slice(1,4));

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'));

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const last = people[people.length-1]
console.log(last);

// part II :

// Using a loop, iterate through the people array and console.log each person.

for (let x in people) {
console.log(people[x]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for (let x in people) {
  if (people[x] !== "Devon") {
    console.log(people[x]);
    break;
  } 
}

// Ex 2:

// Create an array called colors where the value is a list of your five favorite colors.
colors = ["blue", "red", "green", "purple"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for ((let x in colors) && (i=0; i<colors.length();i++)) {
console.log(`"My" ${[i]} "choice is" ${colors.indexOf[x]}` );
  }

// Ex 3:
let i = prompt('Enter a number: ')
// console.log(typeof(number));

do {
console.log(i);
}
while (i < 10) {
    let i = prompt('Enter another number: ')
    console.log(i);
}


// Ex 4: 

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor,building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenantName = building.nameOfTenants[1];
const danRentRooms = building.numberOfRoomsAndRent.dan[0];

console.log(secondTenantName);
console.log(danRentRooms);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const danRent = building.numberOfRoomsAndRent.dan[1];
const sarahRent = building.numberOfRoomsAndRent.sarah[1]
const davidRent = building.numberOfRoomsAndRent.david[1]

if ((sarahRent+davidRent)>danRent) {
  building.numberOfRoomsAndRent.dan[1]=1200;
  console.log(`Dan's rent has been increased to ${building.numberOfRoomsAndRent.dan[1]})`);
} else {


}


// Ex 6 : 
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

for (keys in details){
  console.log(`My ${details.my} is ${details.is} the ${details.the}`);
}