// it use for dynamic change for html using javascript

// 1. getElementById

// 2. getElementsByClassName

// 3. getElementsByTagName

// 4. querySelector

// 5. querySelectorAll

console.dir(window);
console.log(window);

console.dir(document);
console.log(document);

console.dir(document.body);
console.log(document.body);

console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);

console.dir((document.body.style.background = "yellow"));
console.log((document.body.style.background = "yellow"));

console.dir((document.body.childNodes[1].innerText = "aman")); // change heading

// if we link js in head seaction then it will not work    ===> then print null
// if we link js in body seaction then it will work

let heading = document.getElementById("heading");
console.log(heading);

let heading1 = document.getElementById("heading1");
console.log(heading1);

let para = document.getElementsByClassName("para");
console.log(para);

let para2 = document.getElementsByTagName("p");
console.log(para2);

//  query selector

let query = document.querySelector(".para");
console.log(query);

let query1 = document.querySelector("#heading");
console.log(query1);

let query2 = document.querySelector("p");
console.log(query2); //===>    it will print first p tag
