// function
// function declaration
function sayHello() {
  console.log("Hello");
}

// function expression
const sayBye = function () {
  console.log("Bye");
};

// named function expression
const sayHi = function sayHi() {
  console.log("Hi");
};

// arrow function
const sayHo = () => {
  console.log("Ho");
};

// add two value and return the result  //  finction parameters is block scope
function add(a, b) {
  return a + b;
}

// callback function
function callThreeTimes(f) {
  f();
  f();
  f();
}

// create a function using the "function keyword" that takes a string as an argument & return hthe number of vowels in the string.
function CountVowels(str) {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char);
      count++; // count=count+1
    } else {
      console.log("not a vowel");
    }
  }
  console.log(count);
}
// create an arrow function to perform the same task

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char);
      count++; // count=count+1
    } else {
      console.log("not a vowel");
    }
  }
  console.log(count);
};

// forEach loop in Arrays

arr.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Objects
obj.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Sets

set.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Maps

map.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Strings

str.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Numbers

num.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Booleans
bool.forEach((element, index) => {
  console.log(element, index);
});

// forEach loop in Functions

func.forEach((element, index) => {
  console.log(element, index);
});

let arr = [" pune", "delhi", "munbai"];

arr.forEach((val, inx, arr) => {
  console.log(val.toUpperCase, inx, arr);
});

// call back function
arr.forEach(function printVal(val) {
  console.log(val);
});

// for a given array of number. print the square of each value using the forEach loop

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach(function (val) {
  console.log(val * val);
});

let nums = [67, 52, 39];

let calcSqr = (num) => {
  console.log(num * num);
};

nums.forEach(calcSqr);

// map for each loop

let nums1 = [45, 56, 45, 66, 76];

let newArr = nums.map((val) => {
  return val * 2;
});

console.log(newArr);

let calsqr = (num) => {
  console.log(num * num);
};

//filter

let nums2 = [45, 56, 45, 66, 76];

let evenArr = arr.filter((val) => {
  return val % 2 == 0;
});

console.log(evenArr);



