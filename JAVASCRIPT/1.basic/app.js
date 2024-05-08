//(variable keyword) (variable name) (type of values)

let variable = "variable";
var name = "John Doe",
  age = 30;

console.log(variable);

console.log(typeof age);

console.log(10 != 11);
console.log(10 == 11);
console.log(11 === "11");

// APPEND

variable += "variable";
console.log(variable);

// includes

console.log(variable.includes("va"));

// fomat specifie in  java
let fistname = "aman";
let lastname = "sharma";

let fullname = `${fistname} ${lastname}`; // formate specifier

console.log(fullname);

// type convesion sting to number
// let money = "509387";
// money = parseInt(money);
// console.log(typeof money, money);

let money = "509387";
//money = parseInt(money);
money = +money;
console.log(typeof money, money);

// control statements

let num = 7;
let vari_able;

if (num > 20) {
  vari_able = "old man";
} else if (num == 20) {
  vari_able = "man";
} else {
  vari_able = "child";
}

console.log(vari_able);

// switch case statement
switch (true) {
  case num > 10:
    console.log("you are old");
    break;
  default:
    console.log("you are young");
}

// loops
for (let i = 0; i < 6; i++) {
  //console.log(`i is equal        ${i}`);
  console.log(`the value of i is       ${i}`);
}

//while loop
let j = 0;
while (j < 4) {
  console.log(`value of j is             ${j}`);
  j++;
}

// do while loop
let i = 1;
do {
  console.log(`The value of i is           ${i}`);
  i++;
} while (i < 5);

let password = "aman-sharma";

if (password === "aman-sharma" || passsword.includes("aman")) {
  console.log("Access granted");
} else {
  console.log("access denied");
}

// arrays
const arr = [1, "two", true];
console.log(`Element at index 0     ${arr[0]}`);
console.log(`Element at index 1     ${arr[1]}`);

// multi dimensional array
const multiArr = [
  [1, 2],
  [3, 4],
  ["five", "six"],
];
console.log(`Element at first row and second column   ${multiArr[0][1]}`);

//3.05

//OBJECT  ----> {LABEL: VALUES}
const person = {
  name: "Aman Sharma",
  age: 21, //integer
  gender: "Male", //string
};

console.log(person.name); // Aman Sharma
console.log(person["age"]); // 21
console.log(person.gender); // Male

//add property to object
person.nationality = "Indian"; //adding new key value pair to the existing object
console.log(person.nationality); // Indian

//deleting a property from an object
delete person.age; //remove

console.log(typeof person); //object

//Access all properties of an object using for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/* OUTPUT
name: Aman Sharma
age: 21
gender: Male
nationality: Indian
*/

//check if property exists or not --> in operator
if ("age" in person) {
  console.log("Age is present");
} else {
  console.log("Age is absent");
}

/*OUTPUT
Age is present    
*/

//function
function greet() {
  console.log("hello");
}

greet(); // calling function without any argument

//calling function with arguments
function addNumbers(a, b) {
  return a + b;
}

addNumbers(5, 7);

/* Output
12 */

const greetings = function (user) {
  console.log('Hello ${"Name"}');
};

greetings("aman sharma");
/*Output
Hello Aman Sharma
*/

// call back function
function showcallfunc(fn) {
  const value = 10;
  fn(value);
}
showcallfunc(function (value) {
  console.log(value);
});

// call back 2 function

function greet(name, cb) {
  console.log("hello ${name}");
  cb();
}

function cb() {
  console.log("I am called from callback function ");
}

greet("Aman", cb);
/* Output
hello Aman    
I am called from callback function  
*/

function greet() {
  return "hello, my name is ${person.name} & i am ${person.age} years old";
}

const person = {
  name: "aman sharma",
  age: 23,
  greet,
};
console.log(person.greet()); // hello, my name is aman sharma & i am 23 years old

const person = {
  name: "aman sharma",
  age: 19,
  greet: function () {
    return " hello, my name is ${person.name} and my age is ${person.age}   ";
  },
};

console.log(person.greet()); /* Output  
                                hello, my name is aman sharma and my age is 19
                              */

// JSON  javascript  object notation
const person = {
  name: "Aman Sharma",
  Age: "25",
  Country: "India",
  Hobbies: {
    coding: "Master",
    Sports: "Beginner",
  },
};

// JSON.stringify()

const jsondtring = JSON.stringify(person);
console.log(jsondring);
/* Output
'{"name":"Aman Sharma","Age":"25","Country":"India","Hobbies":{"coding":"Master","Sports":"Beginner"}}'*/

// JSON.parse()

const parsedPerson = JSON.parse(jsondring);
console.log(parsedPerson);
/* Output
{
  name: 'Aman Sharma',
  Age: '25',
  Country: 'India',
  Hobbies: { coding: 'Master', Sports: 'Beginner' }
}
*/

// Accessing the value of a property in JavaScript Objects

console.log("Name : " + parsedPerson.name); // Name : Aman Sharma
console.log("Age :" + parsedPerson.Age); // Age : 25

// Adding new properties to an existing JavaScript Object

parsedPerson.MaritalStatus = "Single";
console.log(parsedPerson);
/*Output
{
  name: 'Aman Sharma',
  Age: '25',
  Country: 'India',
  Hobbies: { coding: 'Master', Sports: 'Beginner' },
  MaritalStatus: 'Single'
}
*/

// Removing Properties from a JavaScript object using delete operator
delete parsedPerson.Age; //Removes the "Age" Property
console.log(parsedPerson);
/*Output
{
  name: 'Aman Sharma',
  Country: 'India',
  Hobbies: { coding: 'Master', Sports: 'Beginner' },
  MaritalStatus: 'Single'
}
*/

const date = new date();

const year = date.getFullYear(); //Getting the current Year
const month = date.getMonth(); // Getting the Current Month
const day = date.getDate(); // Getting the Current Day

let birthDay = `Your Birthday is on ${month[date.getMonth()]} ${day},${year}`;
console.log(birthDay);

// set interval
setInterval(
  () => console.log("this function will be executed every 2 second."),
  2000
);

// settimeout

setTimeout(function () {
  console.log("This message will print after 3 seconds");
}, 3000);

// stop the interval after 10 seconds
const intervalId = setInterval(function () {
  console.log("this function is beging executed at the interval");
}, 1000);

// stop the interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log("The Interval has been stopped");
}, 10000);
