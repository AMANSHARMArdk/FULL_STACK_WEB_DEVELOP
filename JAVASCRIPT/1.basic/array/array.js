// Arrays  is mutable in java script adn strings are immutable in java script
let array = [34, 56, 55, 78, 67, 45, 67, 44];
console.log(array);
// length
console.log(array.length);
// array[index]
console.log(array[3]);
// index
console.log(array[0]);
// array methods
// 1.push()
array.push(100);
console.log(array);
// 2.pop()
array.pop();
console.log(array);
// 3.unshift()
array.unshift(100);
console.log(array);
// 4.shift()
array.shift();
console.log(array);
// 5.splice()
array.splice(2, 3);
console.log(array);
// 6.slice()
let newArray = array.slice(2, 5);
console.log(newArray);
// 7.sort()
let sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sortArray.sort();
console.log(sortArray);
// 8.reverse()
sortArray.reverse();
console.log(sortArray);
// 9.includes()
console.log(sortArray.includes(10));

//looping over an array
// for loop
let fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// for of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 10. forEach()
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

// 11. map()    it returns a new array    it does not change the original array    it is used to create a new array from an existing array

//for a given array with marks of student array and find the average marks of the entire class.

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
array4.forEach((num) => {
  sum += num;
});
console.log(sum / array4.length);

// for given array with prices of 5 times array and all items have an offer of 10% off on them. change the array to store final price agter applying offer.

let array5 = [100, 200, 300, 400, 500];
let newArray5 = [];
array5.forEach((price) => {
  newArray5.push(price * 0.1);
});
console.log(newArray5);

// 12. filter()    it returns a new array    it does not change the original array    it is used to create a new array from an existing array    it is used to filter out the elements from an array based on a condition

// slice
// splice    it is used to remove or add elements from an array
// 13. find()    it returns the first element that matches the condition    it returns undefined if no element matches the condition

let array7 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array7.slice(2, 6));

// splice
