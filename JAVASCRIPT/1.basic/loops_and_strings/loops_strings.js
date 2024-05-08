// loops
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// print name 5 times   using for loop

let name = "John";

for (let i = 1; i <= 5; i++) {
  console.log(name);
}
console.log("loop end");

// print name 5 times   using while loop    while loop is used when we dont know how many times we need to loop
let name1 = "John";
let i = 1;
while (i <= 5) {
  console.log(name1);
  i++;
}
console.log("loop end");

// sum  of n naturl number

let sum = 0;
let n = 100;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

// print table of 2

let tableOf = 2;

for (let i = 1; i <= 10; i++) {
  console.log(tableOf + " * " + i + " = " + tableOf * i);
  // 2 * 1 = 2
  // 2 * 2 = 4

  // 2 * 3 = 6

  // 2 * 4 = 8

  // 2 * 5 = 10

  // 2 * 6 = 12

  // 2 * 7 = 14

  // 2 * 8 = 16

  // 2 * 9 = 18

  // 2 * 10 = 20    }
}

// INFINITE LOOP

// while loop
let i7 = 1;
while (i7 <= 10) {
  console.log(i);
  i++;
}

let i8 = 1;
while (i8 <= 10) {
  console.log(i);
  i++;
}

// DO WHILE LOOP

let i4 = 1;
do {
  console.log(i);
  i++;
} while (i4 <= 10);

// for of loop

let name9 = "John";
let size = 0;
for (let char of name9) {
  console.log(char);
  size++;
}

console.log("string size", size);

// for in loop

let person = {
  name: "John",
  age: 25,
};

for (let key in person) {
  console.log(key, person[key]); // give the value of the key
}

// for in loop

let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// for of loop

let colors2 = ["red", "green", "blue"];

for (let color of colors2) {
  console.log(color);
}

// for each loop

let colors3 = ["red", "green", "blue"];

colors3.forEach(function (color) {
  console.log(color);
});

// print  the even number 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// print the odd number 1 to 100    using for loop
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// print the odd number 1 to 100    using while loop
let i3 = 1;
while (i3 <= 100) {
  if (i3 % 2 != 0) {
    console.log(i3);
  }
  i3++;
}

// create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value.
let gameNumber = Math.floor(Math.random() * 100);
let userNumber = prompt("Enter the game number");

while (userNumber != gameNumber) {
  userNumber = prompt("Enter the game number");
}

console.log("You won the game");

//Strings

let name4 = "John";
let name2 = "John";

console.log(name4.length);
// concatination

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // concatination

console.log(fullName);

// toUpperCase()

console.log(fullName.toUpperCase());
// toLowerCase()

console.log(fullName.toLowerCase());
// indexOf()

console.log(fullName.indexOf("Doe"));
// charAt()

console.log(fullName.charAt(0));
// substring()

console.log(fullName.substring(0, 4));
// split()

console.log(fullName.split(" "));
// replace()

console.log(fullName.replace("Doe", "Doi"));

// tamplate literals
let name3 = "John";
let age = 20;

let sentence = `My name is ${name3} and I am ${age} years old`; // 20 is string it is called stings interpolation

console.log(sentence);

let obj = {
  name: "John",
  age: 20,

  isMarried: false,
  isStudent: true,
};
console.log(obj.name, obj.age); // age is int

// rscape characterus  ===> \n   or  \t  not calculate in lengths

let name5 = "John\nDoe";
console.log(name5);

// strings are immutable    ===>    we can not change the string

// prompt the user to enter their full name. generate a username for them based on input. start username with @, followed by their full name and ending with the fullname length.

let userName = prompt("Enter your full name");

let userName1 = "@" + userName + userName.length;

console.log(userName1);
