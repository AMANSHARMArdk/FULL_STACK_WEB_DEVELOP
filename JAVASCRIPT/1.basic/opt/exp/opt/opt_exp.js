//operaters
//+,-,*,/ are built-in operators in JavaScript.
let num1 = 5;
let num2 = 3;
console.log(num1 + num2); //output:8
console.log(num1 - num2); //output:2
console.log(num1 * num2); //output:15
console.log(num1 / num2); //output:1.666666666666667

//Modulus operator returns the remainder of division.
console.log(9 % 4); // output: 1
// In this example, 9 divided by 4 leaves a remainder of 1, so the modulus operator gives us 1
// power
console.log(Math.pow(2, 3)); // output: 8
console.log(num1 ** num2);

// increment and decrement   operators ++, -- can be used as prefix or postfix. Prefix means it will be executed before the value
//increment and decrement operators
let counter = 0;
counter++; //postfix increment (counter++ is equal to counter=counter+1)
// so now counter value will be 1
console.log(counter); //output: 1

counter--; //postfix decrement (counter-- is equal to counter=counter-1)
//so now counter value will be 0
console.log(counter); //output: 0

counter += 5; //prefix increment (counter+=5 is equal to counter=counter+5)
//now counter value will be 5
console.log(counter); //output: 5

/* Equality operators */
let x = 100;
if (x == 100) {
  console.log("Value is 100");
} else {
  console.log("Value is not 100");
}

if (x === 100) {
  console.log("Value is exactly 100");
} else {
  console.log("Value is not exactly  100");
}

/* Inequality operators*/
if (x != 99) {
  console.log("x is not 99");
}

if (x !== 99) {
  console.log("x is not exactly 99");
}

/* Greater than / Less than operators */
if (x > 99) {
  console.log("x is greater than      99");
} else {
  console.log("x is less than or equals to 99");
}

if (x < 100) {
  console.log("x is less than         100");
} else {
  console.log("x is greater than or equals to 100");
}

/* Logical operators AND & OR */
let a = true,
  b = false,
  c = true;
console.log(a && b); //false
console.log(a && !b); //true
console.log(!a && !b); //false
console.log(c || !a); //true

// //comparison operators   with null and undefined
// let x =null;
// let y =undefined;

// if (x == y) {
//     console.log("Both are equal ");
// }  else{
//     console.log("They are        not equal");
// }

// if (x === y) {
//     console.log("Both are    equal");
// }  else{
//     console.log("They are not equal");
// }

/* Conditional (ternary) operator */
let age = 18;
let voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable);

// LOGICAL OPERATER

// !    NOT
// &&   AND
// ||   OR

// ?    Ternary

// :    Colon

// ;    Semicolon

// ,    Comma

// .    Dot
// =    Assignment

// ==   Equality

// ===  Strict Equality

// !=   Inequality

// !==  Strict Inequality
// >     Greater than

// <     Less than

// >=    Greater than or equal to

// <=    Less than or equal to
// +=    Addition assignment

// -=    Subtraction assignment

// *=    Multiplication assignment

// /=    Division assignment

// conditional statements    if, else if, else
// if (condition) {
//     // code to run if condition is true
// }
// else if (condition) {
//     // code to run if condition is true
// }
// else {
//     // code to run if condition is false
// }
age = 16;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

let mode = "dark";
if (mode === "dark") {
  console.log("Dark mode is on");
} else {
  console.log("Light mode is on");
}

// else if statements
let day = "Monday";
if (day === "Monday") {
  console.log("Today is Monday");
} else if (day === "Tuesday") {
  console.log("Today is Tuesday");
} else if (day === "Wednesday") {
  console.log("Today is Wednesday");
} else if (day === "Thursday") {
  console.log("Today is Thursday");
} else if (day === "Friday") {
  console.log("Today is Friday");
} else if (day === "Saturday") {
  console.log("Today is Saturday");
} else if (day === "Sunday") {
  console.log("Today is Sunday");
} else {
  console.log("Invalid day");
}
let num = 20;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

// ternary operater

let age1 = 18;

age1 >= 18
  ? console.log("You are eligible to vote")
  : console.log("You are not eligible to vote");

let mode1 = "dark";

mode1 === "dark"
  ? console.log("Dark mode is on")
  : console.log("Light mode is on");

let day1 = "Monday";

day1 === "Monday"
  ? console.log("Today is Monday")
  : day1 === "Tuesday"
  ? console.log("Today is Tuesday")
  : day1 === "Wednesday"
  ? console.log("Today is Wednesday")
  : day1 === "Thursday"
  ? console.log("Today is Thursday")
  : day1 === "Friday"
  ? console.log("Today is Friday")
  : day1 === "Saturday"
  ? console.log("Today is Saturday")
  : day1 === "Sunday"
  ? console.log("Today is Sunday")
  : console.log("Invalid day");

let num3 = 20;

num3 % 2 === 0 ? console.log(num1, "is even") : console.log(num1, "is odd");

// switch statements    if else statements are better than switch statements    if else statements are better than switch statements    if else statements are better than switch statements
let day2 = "Monday";
switch (day2) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");

    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// get user to input a number using prompt("enter a number"). check id the number is a multiple of 5 or not and print the result.

let num4 = prompt("enter a number");

num4 % 5 === 0
  ? console.log(num4, "is a multiple of 5")
  : console.log(num4, "is not a multiple of 5");

// write a code which can give grades to students according to their scores
let score = prompt("enter your score");

score >= 90 && score <= 100
  ? console.log("A")
  : score >= 80 && score <= 89
  ? console.log("B")
  : score >= 70 && score <= 79
  ? console.log("C")
  : score >= 60 && score <= 69
  ? console.log("D")
  : score >= 50 && score <= 59
  ? console.log("E")
  : score >= 0 && score <= 49
  ? console.log("F")
  : console.log("Invalid score");
