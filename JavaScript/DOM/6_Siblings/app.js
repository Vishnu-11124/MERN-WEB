
let firstLi = document.querySelector('li')
console.log(firstLi)
console.log(firstLi.parentElement) // ui
console.log(firstLi.parentElement.parentElement) // body
console.log("Next Sibling :", firstLi.nextElementSibling)

let fourthLi = document.querySelector(".fourth")
console.log("Previous Sibling :" ,fourthLi.previousElementSibling)

let ul = document.querySelector("ul")
console.log(ul.children)