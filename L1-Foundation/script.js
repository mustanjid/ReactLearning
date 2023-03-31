// Usual way
let number = "0"; // it will work as int!

const button = document.querySelector("#button");
const display = document.querySelector("#display");

button.addEventListener("click",()=>{
    number++;
    display.textContent = number;
})