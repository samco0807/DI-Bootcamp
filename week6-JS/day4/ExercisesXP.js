// Ex 1:
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (i =0; i<colors.length; i++) {
  console.log(`${i+1} choice is ${colors[i]}`);
}

if (colors.includes("Violet")){
  console.log(true);
} else {
  console.log(false);
}

// Ex 2:

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0, y = 0; i < colors.length && y < ordinal.length; i++, y++) {
  console.log(`${i + 1}${ordinal[y+1]} choice is ${colors[i]}`);
}

// Ex 3:

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
let welcomeStudents = [];
welcomeStudents = users.map((user, index, arr) => {
  // console.log(item.firstName);
  welcomeStudents.push(`hello + ${user.firstName}`);
  // console.log(`Hello ${user.firstName}`);
  return user.firstName;
});

console.log(welcomeStudents);

let welcomeStudents;

welcomeStudents = users.map(user => {
  console.log(`Hello ${user.lastName}`);
  return user.firstName;
});

console.log(welcomeStudents);

let fullStackResidents = []
let fullStackResidents = users.filter(
  (user) => user.role === "Full Stack Resident"
);
{
  // fullStackResidents.push(user.role)
}

console.log(fullStackResidents);

let myArray = [1, 2, 3, 4, 5, 10];

const newArray = myArray.map((item, index) => {
  return item * 2;
});

console.log(newArray);

// Ex 3:
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((accumulator, currenValue) => {
  return `${accumulator} ${currenValue}`;
});

(accumulator, currentValue) => accumulator + currentValue;

console.log(sentence);

// Ex 6:
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedCourse = students.filter((student) => student.isPassed === true);
{
}

console.log(passedCourse);