// let btn1 = document.querySelector("#btn");

// btn1.onclick = () => {
//   alert("hello this is my events");
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   alert("hello this is my events");
// };

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.target.id);
//     console.log(evt.target.className);
//     console.log(evt.target.classList);
//     console.log(evt.target.classList[0]);
//
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     console.log(evt.offsetX);
//     console.log(evt.offsetY);
//     // console.log(evt.target.id);
// }

// event listeners

// btn1.addEventListener("click", (evt) => {
//   alert("hello this is my events");
//   console.log(evt);
//   console.log(evt.target);
//   console.log(evt.target.id);
//   console.log(evt.target.className);
//   console.log(evt.target.classList);
//   console.log(evt.target.classList[0]);
//   console.log(evt.type);
// });

// btn1.addEventListener("click", () => {
//   alert("hello this is my events...................");
// });

// create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

// modebuttan.addEventListener("click",()=>{
//     let body=document.querySelector("body");
//     body.classList.toggle("dark-mode");

//     if(body.classList.contains("dark-mode")){
//         modebuttan.innerText="light-mode";
//     }
//     else{
//         modebuttan.innerText="dark-mode";
//     }

// });
let modebuttan = document.querySelector("#mode");
let currentmode = "light";

modebuttan.addEventListener("click", () => {
  if (currentmode === "light") {
    currentmode = "dark";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    currentmode = "light";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  console.log(currentmode);
});

// create a button that changes the color of the text to red when clicked.
