// ************ DOM SELECTORS ************

// 1. getElementsByTagName - Returns a list of items as an array
document.getElementsByTagName("h1")[1].style.background="pink"

// 2. getElementById
document.getElementById("main").style.background = "green"

// 3. getElementsByClassName - Returns a list of items as an array
document.getElementsByClassName("cls")[1].style.background = "orange"

// 4. querySelector
document.querySelector("h1").style.color = "blue" // Apply to the first tag
document.querySelector("#main").style.color = "white" 
document.querySelector(".cls").style.color = "brown" // Apply to the first tag

// 5. querySelectorAll
document.querySelectorAll("li") // Select all the tags and store as an array

// ---------------------------------------
// Storing data in variables

let headerOne = document.getElementsByTagName("h1")[1] // selecting first h1 tag

let list = document.querySelectorAll("li")
console.log(list)