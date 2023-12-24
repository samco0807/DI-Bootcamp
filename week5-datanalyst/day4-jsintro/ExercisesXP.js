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