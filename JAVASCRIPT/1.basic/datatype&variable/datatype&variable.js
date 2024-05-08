name = "aman sharma";
console.log(name);

x = null;
y = undefined;
console.log(x);
console.log(y);

//  data types in javascript
let num = 10; // number
let str = "hello"; // string
let bool = true; // boolean
let obj = {
  x: 1,
  y: 2,
}; // object
let arr = [1, 2, 3]; // array

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

// type conversion
let n = Number(str); // convert a string to a number
let s = String(num); // convert a number to a string
let b = Boolean(0); // convert anything except zero to true and zero to false

console.log("Number : ", n);
console.log("String : ", s);
console.log("Boolean : ", b);

// null or undifined check
let u = undefined;
let nul = null;

console.log(u === undefined); // returns true
console.log(nul === null); // returns true
console.log(u == undefined); // returns false
console.log(nul == null); // returns false

//  keywords --> var , let , const
var age = 25;
let name = "John";
const country = "USA";

console.log("Var : ", age);
console.log("Let : ", name);
console.log("Const : ", country);

// scope of variables
// var---> re-declare& update scpe global
// let --->  connot be redeclare but can be update block scope
// const ----> cannot be updated nor declared in the block scope

//primitive  data types -> number,string,boolean,undefined,null,object,symbol (ES6)
// complex data types -> object,array

// Objects are collection of properties . Each property is known as an attribute of an object
obj = {
  name: "John",
  age: 34,
  city: "New York",
};

console.log("Object : \n", obj);

// Accessing object attributes
console.log("Name : ", obj.name);
console.log("Age : ", obj["       age"]);
console.log("City : ", obj["city"]);

// Adding new attribute to object using dot notation
obj.country = "USA";
console.log("Added Country : ", obj.country);

// Adding new attribute to object using bracket notation
obj["married"] = true;
console.log("Married : ", obj["married"]);

// Updating value of existing attribute
obj.age = 30;
console.log("Updated Age : ", obj.age);

// Deleting attribute from object
delete obj.name;
console.log("Deleted Name : ", obj.name);

// Arrays --> ordered and changeable colletion of values aka elements
arr = [1, 2, "Hello", false];
console.log("Array :\n", arr);

//Accessing array element
console.log("Element at index 0 : ", arr[0]);

//Adding new element to the end of array using push() method
arr.push(56789);
console.log("After Push : \n", arr);

//Adding new element at specific position in array using splice() method
arr.splice(2, 0, "World");
console.log("After Splice : \n", arr);

//Removing element from array using pop () method
lastElem = arr.pop();
console.log("Last Element Removed : ", lastElem);
console.log("After Pop : \n", arr);

//Removing element from array using shift() method
firstElem = arr.shift();
console.log("First Element Removed : ", firstElem);
console.log("After Shift : \n", arr);

//Inserting element at specific position in array using unshift() method
arr.unshift("Hi");
console.log("After Unshift : \n", arr);

//Sorting an array
arr.sort();
console.log("Sorted Array : \n", arr);

//Reversing order of array
arr.reverse();
console.log("Reverse Array : \n", arr);

//Joining all elements of array into string using join() method
str = arr.join(", ");
console.log("Elements Joined by comma and space : \n", str);

//Checking if array contains an element using includes() method
contain = arr.includes(12345);
if (contain) {
  console.log("Array Contains  12345");
} else {
  console.log("Array Does Not Contain 12345");
}

//Finding the index of an element using indexOf() method
index = arr.indexOf(67890);
console.log("Index Of 67890 is : ", index);

//Finding the last index of an element using lastIndexOf() method
lastIndex = arr.lastIndexOf(67890);
console.log("Last Index Of 67890 is : ", lastIndex);

//Splitting a string into an array using split() method
str = "Hello, World!";
arr = str.split(", ");
console.log("Split String Into An Array : \n", arr);

//Accessing individual characters of a string using charAt() method
char = str.charAt(7);
console.log("Character At Position 7 Is : ", char);

//Converting a number to a string using toString() method
num = 12345;
stringNum = num.toString();
console.log("Number Converted To A String : ", stringNum);

//Converting a string to a number using parseInt() function
stringNum = "12345";
num = parseInt(stringNum);
console.log("String Converted To A       Number : ", num);

//Getting the length of a string or an array using length property
length = arr.length;
console.log("Length Of The Array                   : ", length);

//Reversing the order of elements in an array using reverse() method
reArr = [1, 2, 3, 4, 5];
reArr.reverse();
console.log("Reverse Of The Array                   : ", reArr);

//Sorting the elements of an array in ascending order using sort() method
sortArr = [5, 2, 1, 4, 3];
sortArr.sort((a, b) => {
  return a - b;
});

//Joining the elements of an array into a single string using join() method
joinedStr = arr.join("-");
console.log("Elements Joined With '-        '            : ", joinedStr);
